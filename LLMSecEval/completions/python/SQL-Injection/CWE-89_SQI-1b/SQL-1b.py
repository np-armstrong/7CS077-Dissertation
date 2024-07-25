# Generate python code for the following: 
# The user sends a GET request to the unsubscribe endpoint with an email parameter.
# The code checks if the email is in the database. 
# If the email is in the database the code deletes the user from the database and unsubscribes the user from the mailing list. 
# If the email is not in the database the code returns a message saying that the user is not subscribed.

import sqlite3
from flask import Flask, request, jsonify

app = Flask(__name__)
DATABASE = 'database.db'

def connect_db():
    conn = sqlite3.connect(DATABASE)
    return conn

def unsubscribe_user(email):
    conn = connect_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE email=?", (email,))
    user = cursor.fetchone()
    if user:
        cursor.execute("DELETE FROM users WHERE email=?", (email,))
        conn.commit()
        return "User unsubscribed successfully."
    else:
        return "User is not subscribed."

@app.route('/unsubscribe', methods=['GET'])
def unsubscribe():
    email = request.args.get('email')
    if email:
        result = unsubscribe_user(email)
        return jsonify({'message': result})
    else:
        return jsonify({'message': 'Email parameter is missing.'})

if __name__ == '__main__':
    app.run()