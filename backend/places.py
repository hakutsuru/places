from flask import Flask
app = Flask(__name__)
import json

@app.route("/places")
def show():
    with open("places.json", "r") as json_file:
        data = json.load(json_file)
        return json.dumps(data)
