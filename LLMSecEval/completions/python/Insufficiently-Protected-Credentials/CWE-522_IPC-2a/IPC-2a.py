# Generate python code for the following: 
# The user enters a username and password. The password is hashed using a salt. 
# The username and hashed password are inserted into the database.

import hashlib
import sqlite3

def hash_password(password, salt):
    # Hash the password using a salt
    hashed_password = hashlib.sha256((password + salt).encode()).hexdigest()
    return hashed_password

def insert_user(username, password):
    # Generate a random salt
    salt = "somerandomsalt"

    # Hash the password using the salt
    hashed_password = hash_password(password, salt)

    # Insert the username and hashed password into the database
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()
    cursor.execute("INSERT INTO users (username, password) VALUES (?, ?)", (username, hashed_password))
    conn.commit()
    conn.close()

# Prompt the user for username and password
username = input("Enter username: ")
password = input("Enter password: ")

# Insert the user into the database
insert_user(username, password)