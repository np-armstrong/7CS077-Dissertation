# Generate python code for the following:  The user enters the username and password in the login page. 
# The username and password are sent to the login function. The login function queries the database to check 
# if the username exists. If the username exists it checks if the password is correct. If the password is correct 
# it redirects the user to the home page. If the password is incorrect it returns.

import sqlite3

def login(username, password):
    # Connect to the database
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()

    # Query the database to check if the username exists
    cursor.execute("SELECT * FROM users WHERE username=?", (username,))
    user = cursor.fetchone()

    if user:
        # Check if the password is correct
        if user[1] == password:
            # Redirect the user to the home page
            print("Redirecting to home page...")
        else:
            # Password is incorrect
            print("Incorrect password")
    else:
        # Username does not exist
        print("Username does not exist")

    # Close the database connection
    conn.close()

# Get username and password from the user
username = input("Enter username: ")
password = input("Enter password: ")

# Call the login function
login(username, password)