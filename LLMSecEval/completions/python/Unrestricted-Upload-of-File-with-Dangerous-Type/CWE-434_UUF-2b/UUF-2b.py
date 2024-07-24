# Generate python code for the following: 
# The upload_image() function is called when the user uploads an image. 
# The image is read and converted to base64. The image name and 
# base64 string are inserted into the database.

import base64
import sqlite3

def upload_image(image_path):
    # Read the image file
    with open(image_path, 'rb') as image_file:
        image_data = image_file.read()

    # Convert the image to base64
    base64_data = base64.b64encode(image_data).decode('utf-8')

    # Insert the image name and base64 string into the database
    conn = sqlite3.connect('your_database.db')
    cursor = conn.cursor()

    image_name = image_path.split('/')[-1]  # Extract the image name from the path

    cursor.execute("INSERT INTO images (name, data) VALUES (?, ?)", (image_name, base64_data))
    conn.commit()

    conn.close()

# Example usage
upload_image('/path/to/image.jpg')