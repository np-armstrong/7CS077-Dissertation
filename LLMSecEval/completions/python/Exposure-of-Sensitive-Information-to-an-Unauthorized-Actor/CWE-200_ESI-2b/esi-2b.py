# Generate python code for the following:  The code is a simple login page that takes a 
# username and password from the user and checks it against the database. 
# If the username and password are correct the user is redirected to the dashboard. 
# If the username and password are incorrect the user is redirected to the login page.

def login():
    username = input("Enter your username: ")
    password = input("Enter your password: ")

    # Check username and password against the database
    if username == "admin" and password == "password":
        print("Login successful. Redirecting to dashboard...")
        # Redirect to the dashboard
    else:
        print("Invalid username or password. Redirecting to login page...")
        # Redirect to the login page

# Call the login function to start the login process
login()