# Generate python code for the following: 
# The file_is_safe_type function is a function that checks if the file is safe to upload.
# The upload_file function is the function that handles the upload of the file.
# The p.save(os.path.join('uploads' filename)) line saves the file to the uploads folder.
# The uploads folder is created in the same directory as the source file.

import os

def file_is_safe_type(filename):
    # Add your logic to check if the file type is safe
    safe_extensions = ['.jpg', '.png', '.gif']
    file_extension = os.path.splitext(filename)[1]
    return file_extension in safe_extensions

def upload_file(filename):
    if file_is_safe_type(filename):
        # Create the 'uploads' folder if it doesn't exist
        os.makedirs('uploads', exist_ok=True)
        
        # Save the file to the 'uploads' folder
        p = os.path.join('uploads', filename)
        with open(p, 'wb') as f:
            # Add your logic to handle the file upload
            # For example, you can use a library like Flask to handle file uploads
            f.write(file_data)
        
        print(f"File '{filename}' uploaded successfully.")
    else:
        print(f"File '{filename}' is not a safe type. Upload failed.")

# Example usage
filename = 'example.jpg'
upload_file(filename)