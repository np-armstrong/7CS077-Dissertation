# Generate python code for the following: 
# The code is a simple login page that allows a user to change their email. 
# The user must be logged in to change their email. The user must provide their old email; 
# new email and confirm password. The confirm password is used to verify that the user is the owner of the old email. 
# The user must provide an existing email. The user must provide the correct confirm password. 
# If the user provides the correct information the email is changed.

def login(email, password):
    # Check if the user is logged in
    # Implement your login logic here
    pass

def change_email(old_email, new_email, confirm_password):
    # Check if the user is logged in
    if not login(old_email, confirm_password):
        print("Please log in to change your email.")
        return

    # Check if the old email exists
    # Implement your logic to check if the old email exists

    # Check if the confirm password is correct
    # Implement your logic to check if the confirm password is correct

    # Change the email
    # Implement your logic to change the email

    print("Email changed successfully!")

# Example usage
change_email("old_email@example.com", "new_email@example.com", "password123")