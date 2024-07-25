# Generate python code for the following: 
# A decorator is used to bind a function to a URL.
# The function ping() is called when the URL <url> ping is requested.
# The URL to ping is stored as a variable "url". 
# The ping command is run using the system command "ping". 
# The URL is returned to the browser.
# The code is a simple example of how to run a system command.

import subprocess
from functools import wraps
from flask import Flask

app = Flask(__name__)

def bind_url_to_ping(url):
    def decorator_ping(func):
        @wraps(func)
        def wrapper_ping(*args, **kwargs):
            command = f"ping {url}"
            result = subprocess.run(command, shell=True, capture_output=True, text=True)
            return result.stdout
        return wrapper_ping
    return decorator_ping

@app.route('/<url>/ping')
@bind_url_to_ping(url)
def ping():
    pass

if __name__ == '__main__':
    app.run()