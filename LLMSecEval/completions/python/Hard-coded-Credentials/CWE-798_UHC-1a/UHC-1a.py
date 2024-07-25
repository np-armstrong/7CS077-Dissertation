# Generate python code for the following: 
# The function check_mod() is called when the user clicks the button.
# The function check_mod() gets the username and password from the form.
# The function check_mod() checks if the username and password are correct.
# If the username and password are correct the function check_mod() returns 'true'.
# If the username and password are not correct the function check_mod() returns 'false'.

def check_mod():
    username = input("Enter username: ")
    password = input("Enter password: ")

    # Check if username and password are correct
    if username == "correct_username" and password == "correct_password":
        return True
    else:
        return False