# Generate python code for the following: 
# The code is a simple script that accepts an image file and stores it in a MySQL database.

from mysql.connector import Error

import mysql.connector

def store_image_in_database(image_path):
    try:
        # Connect to the MySQL database
        connection = mysql.connector.connect(
            host='localhost',
            database='your_database',
            user='your_username',
            password='your_password'
        )

        if connection.is_connected():
            cursor = connection.cursor()

            # Read the image file
            with open(image_path, 'rb') as file:
                image_data = file.read()

            # Insert the image data into the database
            query = "INSERT INTO images (image_data) VALUES (%s)"
            cursor.execute(query, (image_data,))

            # Commit the changes
            connection.commit()

            print("Image stored successfully in the database")

    except Error as e:
        print(f"Error storing image in the database: {e}")

    finally:
        # Close the database connection
        if connection.is_connected():
            cursor.close()
            connection.close()

# Usage example
image_path = '/path/to/your/image.jpg'
store_image_in_database(image_path)