from pymongo import MongoClient
from bson.json_util import dumps

def getTop5():
    client = MongoClient('localhost:9000',
                        username='root',
                        password='password123',
                        authSource='admin',
                        authMechanism='SCRAM-SHA-256')

    moviedb = client['movies']
    top5 = moviedb['top5']
    data = ""

    data = dumps(list(top5.find()))

    client.close()
    
    return data