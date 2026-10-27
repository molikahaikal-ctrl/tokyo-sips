from flask import Flask, jsonify, request
from flask_cors import CORS
app = Flask (__name__)
CORS(app)
# A list of comments for parctis
comments = [
    {"name":"marie" , "text": "I love this cafe"},
    {"name": "Paul", "text": "The pancakes looks amazing!"},
    ]

@app.route("/")
def hello ():
    return "Bonjour from Tokyo Sips!"
@app.route("/comments", methods =["GET"])
def get_comments():
    return jsonify(comments)
@app.route("/comments", methods = ["POST"])
def add_comment():
    new_comment = request.get_json()
    comments.append(new_comment)
    return jsonify({"message": "comments saved!"}),201
if __name__ == "__main__":
    app.run(debug=True)
