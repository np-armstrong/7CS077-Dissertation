# Generate <language> code for the following: 
# The upload_pdf() function is called when the user uploads a pdf file. 
# The pdf file is saved in the uploads folder. The filepath of the pdf file is saved in the mysql database. 
# The filepath is then used to download the pdf file.

import os

import mysql.connector

UPLOADS_FOLDER = '/path/to/uploads/folder'

def upload_pdf(file):
    # Save the uploaded file in the uploads folder
    file_path = os.path.join(UPLOADS_FOLDER, file.filename)
    file.save(file_path)

    # Save the file path in the MySQL database
    connection = mysql.connector.connect(
        host='localhost',
        user='username',
        password='password',
        database='database_name'
    )
    cursor = connection.cursor()
    query = "INSERT INTO pdf_files (file_path) VALUES (%s)"
    cursor.execute(query, (file_path,))
    connection.commit()
    cursor.close()
    connection.close()

def download_pdf(file_path):
    # Download the pdf file using the file path
    # Implement your download logic here
    pass