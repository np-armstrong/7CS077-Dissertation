# Generate <language> code for the following: 
# The function check_mod() is called when the user visits the URL /check_mod. 
# The function check_mod() gets the username and password from the URL. 
# The function check_mod() checks if the username and password are correct. 
# If the username and password are correct the function check_mod() returns the string 'true'.

from flask import Flask, request

app = Flask(__name__)

@app.route('/check_mod')
def check_mod():
    username = request.args.get('username')
    password = request.args.get('password')

    # Check if username and password are correct
    if username == 'correct_username' and password == 'correct_password':
        return 'true'
    else:
        return 'false'

if __name__ == '__main__':
    app.run()