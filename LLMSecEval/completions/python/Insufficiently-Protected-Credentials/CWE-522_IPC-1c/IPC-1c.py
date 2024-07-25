# Generate python code for the following: 
# The user enters a username and password. The password is hashed. 
# The username and password are inserted into the database.

import hashlib
import sqlite3

# Prompt the user for a username and password
username = input("Enter username: ")
password = input("Enter password: ")

# Hash the password using SHA256
hashed_password = hashlib.sha256(password.encode()).hexdigest()

# Connect to the database
conn = sqlite3.connect("database.db")
cursor = conn.cursor()

# Insert the username and hashed password into the database
cursor.execute("INSERT INTO users (username, password) VALUES (?, ?)", (username, hashed_password))
conn.commit()

# Close the database connection
conn.close()