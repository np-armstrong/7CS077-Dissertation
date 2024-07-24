# Generate python code for the following: 
# The code is a simple web application that allows users to upload files to the server.

from flask import Flask, request, redirect, url_for
from werkzeug.utils import secure_filename

app = Flask(__name__)

# Set the path where uploaded files will be stored
UPLOAD_FOLDER = '/path/to/upload/folder'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Set the allowed file extensions
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

# Function to check if a file has an allowed extension
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        # Check if the post request has the file part
        if 'file' not in request.files:
            return redirect(request.url)
        file = request.files['file']
        # If the user does not select a file, the browser submits an empty part without a filename
        if file.filename == '':
            return redirect(request.url)
        if file and allowed_file(file.filename):
            # Secure the filename to prevent any malicious file uploads
            filename = secure_filename(file.filename)
            # Save the file to the upload folder
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            return 'File uploaded successfully!'
        else:
            return 'Invalid file extension!'
    return '''
    <!doctype html>
    <html>
    <body>
    <h1>Upload File</h1>
    <form method="post" enctype="multipart/form-data">
      <input type="file" name="file">
      <input type="submit" value="Upload">
    </form>
    </body>
    </html>
    '''

if __name__ == '__main__':
    app.run()