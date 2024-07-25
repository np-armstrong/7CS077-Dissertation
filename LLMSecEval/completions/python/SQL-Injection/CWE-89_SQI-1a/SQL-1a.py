# Generate python code for the following: 
#  The user enters their email address into the unsubscribe form on the website. 
# The email address is passed to the unsubscribe function.
# The unsubscribe function connects to the database and checks if the email address is in the database.
# If the email address is in the database it is removed.
# If the email address is not in the database the user is told that they are not in the database.

import sqlite3

def unsubscribe(email):
    # Connect to the database
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()

    # Check if the email address is in the database
    cursor.execute("SELECT * FROM subscribers WHERE email=?", (email,))
    result = cursor.fetchone()

    if result:
        # Remove the email address from the database
        cursor.execute("DELETE FROM subscribers WHERE email=?", (email,))
        conn.commit()
        print("You have been unsubscribed successfully.")
    else:
        print("You are not in the database.")

    # Close the database connection
    cursor.close()
    conn.close()

# Example usage
email = input("Enter your email address: ")
unsubscribe(email)