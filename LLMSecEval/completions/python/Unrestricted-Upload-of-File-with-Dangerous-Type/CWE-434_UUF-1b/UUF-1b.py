# Generate python code for the following: 
# There is a form in an html page that allows the user to upload a pdf file. 
# There is a web server that is running on the user's localhost. 
# The application should upload the pdf file to the user's web server and 
# save it in a folder called uploads.

from flask import Flask, request
import os

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return 'No file part in the request'
    
    file = request.files['file']
    
    if file.filename == '':
        return 'No selected file'
    
    if file:
        filename = file.filename
        file.save(os.path.join('uploads', filename))
        return 'File uploaded successfully'

if __name__ == '__main__':
    app.run()