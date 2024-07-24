# Generate <language> code for the following: 
# The img() function is called when the user visits the /img route.
# The request.args.get('file') function gets the value of the file parameter in the URL.
# The open() function opens the file in read binary mode.
# The read() function reads the file and returns it.

from flask import Flask, request

app = Flask(__name__)

@app.route('/img')
def img():
    file = request.args.get('file')
    if file:
        with open(file, 'rb') as f:
            data = f.read()
        return data
    else:
        return "No file specified"

if __name__ == '__main__':
    app.run()