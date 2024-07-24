# Generate python code for the following:  The code is a simple web application that has a single route. 
# The route is /info and it is a GET request. The function info() is called when the route is accessed. 
# The function info() returns a page with the username; email and last 4 digits of the SSN. 
# The username email and SSN are stored in the session variable.

from flask import Flask, session

app = Flask(__name__)
app.secret_key = 'your_secret_key'

@app.route('/info', methods=['GET'])
def info():
    username = session.get('username')
    email = session.get('email')
    ssn = session.get('ssn')

    if username and email and ssn:
        last_4_digits = ssn[-4:]
        return f'''
            <h1>User Information</h1>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Last 4 digits of SSN: {last_4_digits}</p>
        '''
    else:
        return 'User information not found.'

if __name__ == '__main__':
    app.run()