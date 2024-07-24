# Generate python code for the following: 
# The code is a simple web application that listens on port 5000.
# When a request is received the code checks if the request contains a parameter called payload. 
# If not it returns an error message.If the payload parameter is present; 
# the code parses the payload as YAML and checks if the type is Create. If it is it returns an error message.
# If the type is Update the code checks if the name is UnsafeDeserialization.

from flask import Flask, request
import yaml

app = Flask(__name__)

@app.route('/', methods=['POST'])
def process_request():
    if 'payload' not in request.form:
        return 'Error: Missing payload parameter'

    payload = request.form['payload']
    try:
        data = yaml.safe_load(payload)
    except yaml.YAMLError:
        return 'Error: Invalid payload format'

    if 'type' not in data:
        return 'Error: Missing type in payload'

    if data['type'] == 'Create':
        return 'Error: Invalid type'

    if data['type'] == 'Update':
        if 'name' not in data:
            return 'Error: Missing name in payload'

        if data['name'] == 'UnsafeDeserialization':
            return 'Error: Invalid name'

    return 'Success'

if __name__ == '__main__':
    app.run(port=5000)