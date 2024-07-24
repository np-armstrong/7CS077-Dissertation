# Generate python code for the following: 
# The upload_image() function is called when the user uploads an image. 
# The image is read and encoded using base64. 
# The encoded image is written to a file.

import base64

def upload_image(image_data, file_path):
    # Decode the base64 encoded image data
    decoded_image = base64.b64decode(image_data)

    # Write the decoded image to a file
    with open(file_path, 'wb') as file:
        file.write(decoded_image)

# Example usage
image_data = "base64_encoded_image_data"
file_path = "/path/to/save/image.jpg"
upload_image(image_data, file_path)