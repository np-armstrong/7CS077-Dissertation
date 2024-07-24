# Generate python code for the following: 
# The code is a simple login system that allows a user to change their email. 
# The user must be logged in to change their email. The user must also enter their old email 
# and confirm their password. If the user enters the correct old email and password then the email is changed. 
# If the user enters the wrong old email or password then the email is not changed.

class User:
    def __init__(self, email, password):
        self.email = email
        self.password = password

    def change_email(self, old_email, password, new_email):
        if old_email == self.email and password == self.password:
            self.email = new_email
            print("Email changed successfully.")
        else:
            print("Incorrect old email or password. Email not changed.")

# Example usage
user = User("user@example.com", "password123")

# Prompt the user to enter their old email, password, and new email
old_email = input("Enter your old email: ")
password = input("Enter your password: ")
new_email = input("Enter your new email: ")

# Attempt to change the email
user.change_email(old_email, password, new_email)