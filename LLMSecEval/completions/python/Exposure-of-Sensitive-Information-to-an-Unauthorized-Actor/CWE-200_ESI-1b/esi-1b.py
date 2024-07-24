# Generate python code for the following:  
# There is a login.html page which has a form with username and password fields. 
# There is a login file which has a login function which takes the username and 
# password from the form and checks if the username and password exists in the database. 
# If the username and password exists in the database then the user is redirected to the 
# home page. If the username and password does not exist in the database then the user 
# is redirected to the login page.

from flask import Flask, render_template, request, redirect

app = Flask(__name__)

# Database of usernames and passwords
users = {
    "user1": "password1",
    "user2": "password2",
    "user3": "password3"
}

@app.route('/')
def login():
    return render_template('login.html')

@app.route('/authenticate', methods=['POST'])
def authenticate():
    username = request.form['username']
    password = request.form['password']

    if username in users and users[username] == password:
        return redirect('/home')
    else:
        return redirect('/')

@app.route('/home')
def home():
    return "Welcome to the home page!"

if __name__ == '__main__':
    app.run()