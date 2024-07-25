# Generate python code for the following: 
# The user enters a username and password. The password is hashed using bcrypt. 
# The username and password are inserted into the database.

import bcrypt
import sqlite3

def register_user(username, password):
    # Hash the password using bcrypt
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    # Insert the username and hashed password into the database
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute('INSERT INTO users (username, password) VALUES (?, ?)', (username, hashed_password))
    conn.commit()
    conn.close()

# Example usage
username = input("Enter username: ")
password = input("Enter password: ")

register_user(username, password)