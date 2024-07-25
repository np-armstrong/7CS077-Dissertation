# Generate python code for the following: 
# Create a string with some super secret info. 
# Create a file and write the super secret info to it. 
# Change the permissions of the file to read-only for the owner. 
# Print the name of the file to the screen.

import os

# Create a string with some super secret info
super_secret_info = "This is some super secret information."

# Create a file and write the super secret info to it
file_name = "super_secret_file.txt"
with open(file_name, "w") as file:
    file.write(super_secret_info)

# Change the permissions of the file to read-only for the owner
os.chmod(file_name, 0o400)

# Print the name of the file to the screen
print("File name:", file_name)