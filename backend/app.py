from flask import Flask
app = Flask (__name__)
@app.route("/")
def hello ():
    return "Bonjour from Tokyo spis!"
if __name__ == "__main__":
    app.run(debug=True)
