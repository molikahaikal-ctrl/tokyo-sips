from flask import Flask, jsonify
app = Flask (__name__)
# A list of comments for parctis
comments = [
    {"name":"marie" , "text": "I love this cafe"},
    {"name": "Paul", "text": "The pancakes looks amazing!"},
    ]

@app.route("/")
def hello ():
    return "Bonjour from Tokyo Sips!"
@app.route("/comments")
def get_comments():
    return jsonify(comments)

if __name__ == "__main__":
    app.run(debug=True)
