from flask import Flask
import time
import IPython
from rev_ai.speechrec import RevSpeechAPI
from flask import request
from pymongo import MongoClient
from pytube import YouTube
import moviepy.editor as mp
import httplib, urllib, base64
import requests

### Mongo ####
mongo_client = MongoClient('mongodb://snippit:snippit1@ds031088.mlab.com:31088/snippit-db')
db = mongo_client['snippit-db']                                                                                  
collection = db.test_collection

app = Flask(__name__)

#### RevSpeech Setup ####
rev_client = RevSpeechAPI('01zjW5-yLjxJiY2GOrUVNBUTGq-Px7ipww0kBKPiUWDULpZf_Hibq1OmcbT_FTk_ccYcz-u5DmhjGP0nlGywkWTMMlLrc')

def await_transcript(client, id_):
    time_passed = 0
    while client.view_job(id_)['status'] == 'in_progress':
        print('... processing for ' + str(time_passed) + ' seconds')
        time.sleep(30)
        time_passed += 30
    print('done processing in ' + str(time_passed) + ' seconds')
    return client.get_transcript(id_)

path_to_videos = 'videos/'

def download_url(url, name):
    YouTube(url).streams.filter(progressive=True, file_extension='mp4').first().download(path_to_videos, name)

def transcribe_file(name, url):
    print(rev_client.get_account())
    audio_path = path_to_videos + name + ".mp3"
    print(audio_path)
    result = rev_client.submit_job_local_file(audio_path)
#    result = rev_client.submit_job_url(url)
    transcript = await_transcript(rev_client, result['id'])
    print(rev_client.view_job(result['id']))
    return transcript
    
def save_to_mongo(name, transcript):
    post = {"key" : name,
            "transcript": transcript}
    collection.insert_one(post)

#### ROUTER ####

@app.route('/hello_world')
def hello_world():
    return 'Hello, World!'


@app.route('/send_video', methods=['POST'])
def send_video():
    body = request.form;
    url = body['url']
    name = body['name']

    print('downloading ' + str(url))
    download_url(url, name)
    print('done downloading')
    return 'downloaded ' + str(url) +  ' to ' + path_to_videos + name + '.mp4'


@app.route('/transcribe_video', methods=['POST'])
def process_video():
    body = request.form;
    url = body['url']
    name = body['name']

    transcript = transcribe_file(name, url)

    print('ready to save to mongodb')
    save_to_mongo(name, transcript)
    return 'transcription obtained'

@app.route('/video_audio', methods=['POST'])
def video_to_audio():
    body = request.form;
    name = body['name']
    clip = mp.VideoFileClip(path_to_videos + name + ".mp4")
    clip.audio.write_audiofile(path_to_videos + name + ".mp3")
    return 'coverted to audio file'


@app.route('/parse_transcript', methods=['POST'])
def parse_transcript():
    body = request.form;
    name = body['name']
    blob = collection.find_one({"key": name})   
    monologues = []
    monologues_times = []
    for monologue in blob['transcript']['monologues']:
        string = ''
        times =[]
        for element in monologue['elements']:
            string += element['value']
#            words.append(element['value'])
            if(element['type'] == 'text'):
                times.append(element['ts'])
        monologues.append(string)
        monologues_times.append(times)
    string = ''
    for monologue in monologues:
        string += '***'
        string += monologue
    text_array = monologues
    time_array = monologues_times
    post = {"key" : name + '_parsed',
            "text_array": text_array,
            "time_array": time_array}
    collection.insert_one(post)
    return  string

@app.route('/get_key_phrases', methods=['POST'])
def get_key_phrases():
    body = request.form;
    name = body['name']
    blob = collection.find_one({"key": name +"_parsed"})   
    text_array = blob["text_array"]
    time_array = blob["time_array"]
    print(text_array)
    print(time_array)
    text_analytics_base_url = "https://westcentralus.api.cognitive.microsoft.com/text/analytics/v2.0/"
    key_phrase_api_url = text_analytics_base_url + "keyPhrases"
    headers = {
        # Request headers
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '06adb3809edf47729a703b6536cc5ad6',
    }
    document_arr = []
    print(text_array)
    for i in range(0, len(text_array)):
        doc = {'id': i,
                'language': 'en',
                'text': text_array[i]}
        document_arr.append(doc)
    documents = {'documents': document_arr}
    response  = requests.post(key_phrase_api_url, headers=headers, json=documents)
    key_phrases = response.json()
    print(key_phrases)
    top = get_top_phrases(key_phrases, text_array, time_array)
    print(top)
    return  'done'

def get_top_phrases(key_phrases, text_array, time_array):
    out = {}
    for i in range(0 ,len(key_phrases['documents'])):
        for j in range(0, 3):
            if j >= len(key_phrases['documents'][i]['keyPhrases']):
                continue
            phrase = key_phrases['documents'][i]['keyPhrases'][j]
#           index in the string
            index = text_array[i].index(phrase)
            time_index = get_time_index(text_array[i], index)
            if(time_index >= len(time_array[i])):
                time_index = len(time_array[i]) -1
            out[phrase]= time_array[i][time_index]
            print(phrase)
            print(time_array[i][time_index])
    return out
    
def get_time_index(string, index):
    count = 0
    i = 0
    while(i < index):
        if(string[i] == ' '):
            count += 1
        i += 1
    return count
    






