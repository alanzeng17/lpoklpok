from pymongo import MongoClient
client = MongoClient('mongodb://snippit:snippit1@ds031088.mlab.com:31088/snippit-db')

db = client['snippit-db']
collection = db.test_collection

post = {"key": "value",
        "string": "hello the tester"  }
#collection.insert_one(post)

import pprint

pprint.pprint(collection.find_one({"key": "hurricanes"}))
