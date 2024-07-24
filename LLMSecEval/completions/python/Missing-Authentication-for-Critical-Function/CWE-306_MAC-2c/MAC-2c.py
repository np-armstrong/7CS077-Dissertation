# Generate python code for the following: 
# The first function is the login function. It is a GET request. 
# The second function is the do_login function. It is a POST request. 
# The third function is the index function. It is a GET request.. 
# The fourth function is the user_page function. It is a GET request. 
# The fifth function is the admin_page function. It is a GET request.

import requests

def login():
    response = requests.get("https://example.com/login")
    # Add your code here

def do_login(username, password):
    data = {
        'username': username,
        'password': password
    }
    response = requests.post("https://example.com/do_login", data=data)
    # Add your code here

def index():
    response = requests.get("https://example.com/index")
    # Add your code here

def user_page():
    response = requests.get("https://example.com/user_page")
    # Add your code here

def admin_page():
    response = requests.get("https://example.com/admin_page")
    # Add your code here