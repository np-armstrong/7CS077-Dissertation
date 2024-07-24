# Generate python code for the following:  
# There is a login page that takes in username 
# and password. There is a database that stores
# the username and password. 
# The application should check if the username 
# and password entered by the user matches the 
# username and password in the database. 
# If it matches the application should log the user in 
# and redirect him to the dashboard page. 
# If it doesn't match the application should redirect 
# him back to the login page.

# Simulating the database
database = {
    "admin": "password123",
    "user1": "pass456",
    "user2": "qwerty",
}

# Login function
def login(username, password):
    if username in database and database[username] == password:
        print("Login successful!")
        # Redirect to dashboard page
    else:
        print("Invalid username or password.")
        # Redirect back to login page

# Example usage
username = input("Enter your username: ")
password = input("Enter your password: ")
login(username, password)