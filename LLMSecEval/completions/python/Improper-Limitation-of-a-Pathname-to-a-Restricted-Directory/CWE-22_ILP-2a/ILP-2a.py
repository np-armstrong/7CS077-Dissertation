# Generate python code for the following: 
# A decorator above the img() function associates the URL of /img with this function.
# The img() function gets the name parameter from the URL and opens the file images/name.
# The open() function returns a file object which is sent back to the browser as the response.

from functools import wraps
from flask import Flask, request, send_file

app = Flask(__name__)

def img_route(route):
    def decorator_img_route(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            name = request.args.get('name')
            if name:
                file_path = f'images/{name}'
                return send_file(file_path)
            else:
                return 'Image name not provided', 400
        app.add_url_rule(route, view_func=wrapper)
        return wrapper
    return decorator_img_route

@app.route('/')
def home():
    return 'Welcome to the Image Server'

@img_route('/img')
def img():
    pass

if __name__ == '__main__':
    app.run()