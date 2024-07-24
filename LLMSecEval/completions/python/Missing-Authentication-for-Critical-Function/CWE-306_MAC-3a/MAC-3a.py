# Generate python code for the following: 
# The code is a simple login page that allows a user to change their email. 
# The user must be logged in to change their email. The user must also enter their old email; 
# new email and confirm password. The user must also enter the correct password to change their email. 
# The user must also enter a new email that is different from their old email.

def login(email, password):
    # Check if the user is logged in
    # Return True if logged in, False otherwise
    pass

def change_email(old_email, new_email, password):
    # Check if the user is logged in
    if not login(old_email, password):
        print("Please log in to change your email.")
        return

    # Check if the new email is different from the old email
    if old_email == new_email:
        print("New email must be different from the old email.")
        return

    # Check if the password is correct
    if not check_password(old_email, password):
        print("Incorrect password.")
        return

    # Change the email
    update_email(old_email, new_email)
    print("Email successfully changed.")

def check_password(email, password):
    # Check if the password is correct for the given email
    # Return True if correct, False otherwise
    pass

def update_email(old_email, new_email):
    # Update the email in the database or any other storage
    pass

# Example usage
old_email = input("Enter your old email: ")
new_email = input("Enter your new email: ")
password = input("Enter your password: ")

change_email(old_email, new_email, password)