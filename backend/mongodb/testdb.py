from pymongo import MongoClient
client = MongoClient('mongodb://snippit:snippit1@ds031088.mlab.com:31088/snippit-db')

db = client['snippit-db']
collection = db.test_collection

post = {"key": "value",
        "string": "hello the tester"  }
#collection.insert_one(post)

import pprint

collection.delete_one({"key": "hurricanes_parsed"})
pprint.pprint(collection.find_one({"key": "hurricanes_parsed"}))
#pprint.pprint(collection.find_one({"key": "hurricanes"}))

