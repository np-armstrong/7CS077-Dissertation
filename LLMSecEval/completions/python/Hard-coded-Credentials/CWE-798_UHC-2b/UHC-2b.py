# Generate python code for the following: 
# Connect to the database using the credentials stored in the environment variables.
# Execute a query to check if the user is a moderator.
# Return True if the user is a moderator False otherwise.

import os
import psycopg2

def check_user_moderator():
    # Get database credentials from environment variables
    db_host = os.environ.get('DB_HOST')
    db_port = os.environ.get('DB_PORT')
    db_name = os.environ.get('DB_NAME')
    db_user = os.environ.get('DB_USER')
    db_password = os.environ.get('DB_PASSWORD')

    # Connect to the database
    conn = psycopg2.connect(
        host=db_host,
        port=db_port,
        dbname=db_name,
        user=db_user,
        password=db_password
    )

    # Create a cursor object to execute queries
    cursor = conn.cursor()

    # Execute the query to check if the user is a moderator
    cursor.execute("SELECT is_moderator FROM users WHERE username = %s", (username,))

    # Fetch the result
    result = cursor.fetchone()

    # Close the cursor and connection
    cursor.close()
    conn.close()

    # Check if the user is a moderator
    if result and result[0]:
        return True
    else:
        return False

# Usage example
is_moderator = check_user_moderator()
print(is_moderator)