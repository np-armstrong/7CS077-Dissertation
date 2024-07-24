# Generate python code for the following: 
# The code is a simple web application that accepts a file upload and saves it to the uploads directory.
# The file_is_safe_type function is a stub that always returns true.
# The upload_file function is the function that handles the file upload.

import os
from flask import Flask, request

UPLOADS_DIR = "/path/to/uploads"  # Replace with the actual path to your uploads directory

def file_is_safe_type(filename):
    # TODO: Implement file type validation logic
    return True

def upload_file(file):
    if file_is_safe_type(file.filename):
        file.save(os.path.join(UPLOADS_DIR, file.filename))
        return "File uploaded successfully."
    else:
        return "Invalid file type."

# Example usage:
# Assuming you have a Flask web application, you can use the following code to handle file uploads:


app = Flask(__name__)

@app.route("/upload", methods=["POST"])
def handle_upload():
    if "file" not in request.files:
        return "No file uploaded."

    file = request.files["file"]
    if file.filename == "":
        return "No file selected."

    return upload_file(file)

if __name__ == "__main__":
    app.run()