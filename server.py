from flask import Flask, request, abort
import json #jason object notation
from data import me, catalog
import random
from random import randrange
from flask_cors import CORS
from config import db
from bson import ObjectId #binary object notation

# creating a new object in Python for the Flask class
# string, float, int are global varibles
# using double underscores __ are called "magic" varibles

app = Flask(__name__)
CORS(app)  # disable CORS, anyone can access this API




# to get to the root of the domanin
@app.get("/")
def home():
    return "Hello from Flask"


@app.get("/test")
def test():
    return "This is just another endpoint"


@app.get("/about")
def about():
    return "About The developer Jimmy Smith"

##############################################################################################################
###########################################  API PRODUCTS ####################################################
##############################################################################################################

def fix_id(obj):
    obj["_id"] = str(obj["_id"])
    return obj

@app.get("/api/test")
def test_api():
    return json.dumps("Hello!")

@app.get("/api/about")
def about_me():
    return json.dumps(me)

@app.get("/api/catalog")
def get_catalog():
    cursor = db.Products.find({}) # this will read all of the products in the DB  the {} reprensts a query/filter it is empty return 
    results = []
    for prod in cursor:
        prod = fix_id(prod)
        results.append(prod)
    
    return json.dumps(results)

    # return the list of products



@app.post("/api/catalog")
def save_product():
    product = request.get_json()
    #must validate
    if not "title" in product:
        return abort(400, "Error: Title is empty")   

    if len(product["title"]) < 1:
        return abort(400, "Error: Title is less than 5 characters")
    
    #when sending a product this assigns a unique_id
    if not "price" in product:
        return abort(400, "Error: Price is empty"),
            
    if product["price"] < 1:
           return abort(400, "Error: Price is less than 1.00")

    #product["_id"] = random.randint(100,100000)
    db.Products.insert_one(product)
    
    product["_id"] = str(product)

    return json.dumps(product["_id"])

@app.get("/api/count")
def catalog_count():
    cursor = db.Products.find({})
    products = []
    for prod in cursor:
        products.append(prod)
    
    count = len(products)    
    return json.dumps(count)
    #GET DATA FROM DB INTO CURSOR
    #MOVE ALL PRODS FROM THE CURSOR TO A LIST
    #COUNT THE ELEMENTS ON THE LIST


@app.get("/api/catalog/total")
def catalog_total():
    cursor = db.Products.find({})
    for prod in cursor:
        total += prod["price"]

    return json.dumps(total)


@app.get("/api/catalog/lowest")
def catalog_lowest():
    lowest = catalog[0]
    for prod in catalog:
        if prod["price"] < lowest["price"]:
            lowest = prod

    return json.dumps(lowest)


@app.get('/api/product/<id>')
def get_product_by_id(id):
    prod = db.Products.find_one({"_id":ObjectId(id)})
    if not prod:
        return abort(404, "Product not found")
    prod = fix_id(prod) # to fix the id
    return json.dumps(prod)

    #for prod in catalog:
    #    if prod["_id"] == id:
    #        return json.dumps(prod)

    #return json.dumps("Erro ID is not valid")


@app.get('/api/products/<category>')
def get_product_by_cat(category):

    #to build a filter that would only look for specific category
    cursor = db.Products.find({ "category": category})
    results = []
    for prod in cursor:
        prod = fix_id(prod)
        results.append(prod)

        #if prod["category"].lower() == category.lower():
        #            results.append(prod)
    return json.dumps(results)

@app.post("/api/coupons")
def save_coupon():
    coupon = request.get_json()
    #must validate
    if not "code" in coupon:
        return abort(400, "code is required")  

    if not "discount" in coupon:
        abort(400, "discount is required")

    db.CouponCode.insert_one(coupon)
    coupon = fix_id(coupon)
    return json.dumps(coupon)


@app.get("/api/coupons")
def get_coupons():
    cursor = db.CouponCode.find({})
    results = []
    for cp in cursor:
        cp = fix_id(cp)
        results.append(cp)
    
    return json.dumps(results)    


@app.post("/api/game/<pick>")
def rps_game(pick):

    num = random.randint(0,2)
    pc = ""
    if num == 0:
        pc = "paper"
    elif num == 1:
        pc = "rock"
    else:
        pc = "scissors"

    winner = ""
    if pick == "paper":
        if pc == "rock":
            winner = "you"
        elif pc == "scissors":
            winner = "pc" 
        else:
            winner = "draw"

    elif pick == "rock":
        if pc == "rock":
            winner = "draw"
        elif pc == "scissors":
            winner = "you" 
        else:
            winner = "pc"

    elif pick == "scissors":
        if pc == "rock":
            winner = "pc"
        elif pc == "scissors":
            winner = "draw" 
        else:
            winner = "you"
    
     
    results = {
        "you":pick,
        "PC":pc,
        "Winner": winner
    
    }
    
    return json.dumps(results)

