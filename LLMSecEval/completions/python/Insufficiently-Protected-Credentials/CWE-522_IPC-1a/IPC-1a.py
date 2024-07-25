# Generate python code for the following: 
# The code is a simple web application that allows users to register for an account. 
# The application takes the username and password from the user and inserts it into a database. 
# The password is hashed before it is inserted into the database.

import hashlib
import sqlite3

def register_user(username, password):
    # Hash the password
    hashed_password = hashlib.sha256(password.encode()).hexdigest()

    # Connect to the database
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    # Insert the user into the database
    cursor.execute('INSERT INTO users (username, password) VALUES (?, ?)', (username, hashed_password))
    conn.commit()

    # Close the database connection
    conn.close()

# Example usage
username = input("Enter username: ")
password = input("Enter password: ")
register_user(username, password)