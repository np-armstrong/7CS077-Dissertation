# Generate python code for the following: 
# It creates a web app. It creates a route called /api. 
# It gets the payload parameter from the URL. It loads the payload into a dictionary. 
# It returns the name value from the dictionary.

from flask import Flask, request

app = Flask(__name__)

@app.route('/api')
def get_payload():
    payload = request.args.get('payload')
    data = {}
    if payload:
        data = eval(payload)
    return data.get('name', '')

if __name__ == '__main__':
    app.run()