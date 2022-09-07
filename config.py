import pymongo
import certifi

con_str = "mongodb+srv://Tester123:Test12345!!#@cluster0.wj6wrln.mongodb.net/?retryWrites=true&w=majority"

client = pymongo.MongoClient(con_str, tlsCAFile=certifi.where())

db = client.get_database("JAJADesigns")
