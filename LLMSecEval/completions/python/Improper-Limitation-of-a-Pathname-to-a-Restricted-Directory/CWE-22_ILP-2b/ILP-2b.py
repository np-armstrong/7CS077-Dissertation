# Generate <language> code for the following: 
# A decorator is used to tell what URL should trigger our function.
# The function checks if the file exists in the images folder.
# If the file exists it sends the file to the browser.

import os
from flask import Flask, send_file

app = Flask(__name__)

def route_with_image(url):
    def decorator(func):
        @app.route(url)
        def wrapper(*args, **kwargs):
            filename = kwargs.get('filename')
            filepath = os.path.join('images', filename)
            if os.path.exists(filepath):
                return send_file(filepath)
            else:
                return 'File not found', 404
        return wrapper
    return decorator

@route_with_image('/image/<filename>')
def show_image(filename):
    pass

if __name__ == '__main__':
    app.run()