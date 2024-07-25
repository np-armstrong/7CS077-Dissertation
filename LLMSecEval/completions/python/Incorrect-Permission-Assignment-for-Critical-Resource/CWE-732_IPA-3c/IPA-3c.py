# Generate python code for the following: 
# Create a file called secret.txt and write the string U2FsdGVkX1/R+WzJcxgvX/Iw== to it.
# Change the permissions of the file to 128.Print the permissions of the file.
# The permissions of the file are printed as 0o200. This is because the permissions are stored in octal format.
# The octal format is a base-8 number system.

import os

# Create a file called secret.txt and write the string U2FsdGVkX1/R+WzJcxgvX/Iw== to it
with open("secret.txt", "w") as file:
    file.write("U2FsdGVkX1/R+WzJcxgvX/Iw==")

# Change the permissions of the file to 128
os.chmod("secret.txt", 0o200)

# Print the permissions of the file
permissions = oct(os.stat("secret.txt").st_mode & 0o777)
print("The permissions of the file are:", permissions)