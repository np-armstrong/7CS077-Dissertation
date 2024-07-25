# Generate python code for the following: 
# The code is a simple registration form that takes the username and password from the user 
# and stores it in the database.The password is hashed and a random salt is generated.
# The salt is appended to the hashed password and stored in the database.
# The salt is used to verify the password during login.

import hashlib
import os

def register_user(username, password):
    # Generate a random salt
    salt = os.urandom(16)

    # Hash the password with the salt
    hashed_password = hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt, 100000)

    # Store the salt and hashed password in the database
    # Your code to store the data in the database goes here

def verify_password(username, password):
    # Retrieve the salt and hashed password from the database based on the username
    # Your code to retrieve the data from the database goes here

    # Hash the provided password with the retrieved salt
    hashed_password = hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt, 100000)

    # Compare the hashed passwords
    if hashed_password == stored_hashed_password:
        print("Password is correct")
    else:
        print("Password is incorrect")

# Example usage
username = input("Enter username: ")
password = input("Enter password: ")

register_user(username, password)

login_username = input("Enter username for login: ")
login_password = input("Enter password for login: ")

verify_password(login_username, login_password)