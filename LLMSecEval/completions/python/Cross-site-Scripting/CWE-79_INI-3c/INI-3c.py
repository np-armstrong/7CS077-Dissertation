# Generate python code for the following: 
#  A decorator creates a mapping between the URL given as an argument and the function that follows it.
# The function hello() returns a string with the text Hello followed by the value of the variable username.
# The variable username is passed as an argument to the function hello().
# The escape() function converts special characters to HTML-safe sequences.
# The function hello() is called when a user navigates to the URL /hello/username

from functools import wraps
from flask import Flask, escape

app = Flask(__name__)

def url_mapping(url):
    def decorator(func):
        @app.route(url)
        @wraps(func)
        def wrapper(*args, **kwargs):
            username = kwargs.get('username')
            return escape(func(username))
        return wrapper
    return decorator

@url_mapping('/hello/<username>')
def hello(username):
    return f'Hello {username}'

if __name__ == '__main__':
    app.run()