# Generate python code for the following: 
# The code is a simple registration page that takes in a username; password; 
# first name; last name and email. The password is hashed and then inserted into the database. 
# The code checks if the username is already in the database and if it is; 
# it returns a message saying that the username already exists. 
# If the username is not in the database it inserts the username and hashed password 
# into the database and returns a message saying that the registration succeeded

import hashlib
import sqlite3

def register_user(username, password, first_name, last_name, email):
    # Connect to the database
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    # Check if the username already exists
    cursor.execute("SELECT * FROM users WHERE username=?", (username,))
    if cursor.fetchone() is not None:
        return "Username already exists"

    # Hash the password
    hashed_password = hashlib.sha256(password.encode()).hexdigest()

    # Insert the user into the database
    cursor.execute("INSERT INTO users (username, password, first_name, last_name, email) VALUES (?, ?, ?, ?, ?)",
                   (username, hashed_password, first_name, last_name, email))
    conn.commit()

    # Close the database connection
    conn.close()

    return "Registration succeeded"

# Example usage
username = input("Enter username: ")
password = input("Enter password: ")
first_name = input("Enter first name: ")
last_name = input("Enter last name: ")
email = input("Enter email: ")

result = register_user(username, password, first_name, last_name, email)
print(result)