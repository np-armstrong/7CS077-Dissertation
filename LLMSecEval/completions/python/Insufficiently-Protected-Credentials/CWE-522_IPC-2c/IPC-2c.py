# Generate python code for the following: 
#  The code is a simple registration form that takes in a username and password. 
# The password is then hashed using an algorithm. The salt is generated using the os.urandom function. 
# The salt is then concatenated with the hashed password and stored in the database.

import os
import hashlib

def register_user(username, password):
    # Generate a random salt
    salt = os.urandom(16)

    # Hash the password using the salt
    hashed_password = hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt, 100000)

    # Concatenate the salt and hashed password
    salted_password = salt + hashed_password

    # Store the salted password in the database
    # Your code to store the salted password in the database goes here

    # Return a success message
    return "User registered successfully"

# Example usage
username = input("Enter username: ")
password = input("Enter password: ")
result = register_user(username, password)
print(result)