from flask import Flask
import time
import IPython
from rev_ai.speechrec import RevSpeechAPI
from flask import request
from pymongo import MongoClient
from pytube import YouTube
import moviepy.editor as mp

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
    string = ''
    times = []
    for monologue in blob['transcript']['monologues']:
        for element in monologue['elements']:
            string += element['value']
#            words.append(element['value'])
#            times.append(element['ts'])
    return  string

