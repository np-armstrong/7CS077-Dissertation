# Generate python code for the following: 
# The code is a simple registration form that takes the username and password from 
# the user and hashes the password.

import hashlib

def register():
    username = input("Enter your username: ")
    password = input("Enter your password: ")

    # Hash the password using SHA256 algorithm
    hashed_password = hashlib.sha256(password.encode()).hexdigest()

    # Save the username and hashed password to a database or file
    # You can implement this part based on your specific requirements

    print("Registration successful!")

register()