# Generate python code for the following: 
# The login page is a simple form with a username and password field. 
# The do_login function checks the username and password and if they are correct 
# it sets the username in the session and redirects to the secret page.
# The index page is a simple page that has a link to the login page.
# The secret page is a simple page that says; "Secret settings"

from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'your_secret_key'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        # Check if username and password are correct
        if username == 'admin' and password == 'password':
            session['username'] = username
            return redirect('/secret')
        else:
            return render_template('login.html', error='Invalid username or password')
    
    return render_template('login.html')

@app.route('/secret')
def secret():
    if 'username' in session:
        return render_template('secret.html')
    else:
        return redirect('/login')

if __name__ == '__main__':
    app.run()