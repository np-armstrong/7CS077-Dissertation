# Generate python code for the following:  The code is a simple login page that takes the 
# username and password from the user and checks if the username and password are correct. 
# If they are correct the user is redirected to the session page. 
# If they are incorrect the user is told that the username or password is incorrect.

def login():
    username = input("Enter your username: ")
    password = input("Enter your password: ")

    # Check if the username and password are correct
    if username == "admin" and password == "password":
        print("Login successful! Redirecting to the session page...")
        # Redirect to the session page
        # Add your code here to redirect the user to the session page
    else:
        print("Incorrect username or password")

# Call the login function to start the login process
login()

