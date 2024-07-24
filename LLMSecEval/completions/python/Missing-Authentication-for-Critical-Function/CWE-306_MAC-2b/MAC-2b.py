# Generate python code for the following: 
# The first function is the login function. It is a GET request. 
# It will return a form for the user to enter their username and password. 
# The second function is the do_login function. It is a POST request. 
# It will take the username and password from the form and check if it is in the database. 
# If it is it will redirect the user to the user_page. If it is not it will return.

from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/login', methods=['GET'])
def login():
    return render_template('login.html')

@app.route('/do_login', methods=['POST'])
def do_login():
    username = request.form.get('username')
    password = request.form.get('password')

    # Check if username and password are in the database
    if check_credentials(username, password):
        return redirect('/user_page')
    else:
        return "Invalid username or password"

def check_credentials(username, password):
    # Check if username and password are in the database
    # Replace this with your actual database check logic
    if username == "admin" and password == "password":
        return True
    else:
        return False

@app.route('/user_page')
def user_page():
    return "Welcome to the user page!"

if __name__ == '__main__':
    app.run()