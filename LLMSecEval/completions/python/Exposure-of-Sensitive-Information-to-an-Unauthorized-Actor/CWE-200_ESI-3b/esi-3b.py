# Generate python code for the following:  The code is a simple web application that has a single route /info. 
# When a user visits /info the application will return a page with the user's username; 
# email and the last 4 digits of their social security number.

from flask import Flask, request

app = Flask(__name__)

@app.route('/info')
def get_user_info():
    # Get user information from request (replace with your own logic)
    username = request.args.get('username')
    email = request.args.get('email')
    ssn = request.args.get('ssn')

    # Extract last 4 digits of social security number
    last_4_digits = ssn[-4:] if ssn else ''

    # Return user information as a web page
    return f'''
        <h1>User Information</h1>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <p>Last 4 digits of SSN: {last_4_digits}</p>
    '''

if __name__ == '__main__':
    app.run()