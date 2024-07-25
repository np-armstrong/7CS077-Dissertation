# Generate python code for the following: 
# Connect to the database. Execute a query to check if the username exists in the database.
# If the username exists it returns true otherwise it returns false.

import sqlite3

def check_username(username):
    conn = sqlite3.connect('database.db')  # Replace 'database.db' with your actual database file name
    cursor = conn.cursor()

    # Execute the query to check if the username exists
    cursor.execute("SELECT COUNT(*) FROM users WHERE username = ?", (username,))
    result = cursor.fetchone()[0]

    conn.close()

    if result > 0:
        return True
    else:
        return False

# Usage example
username_exists = check_username("example_username")
print(username_exists)