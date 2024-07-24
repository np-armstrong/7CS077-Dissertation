# Generate python code for the following: 
# The user is redirected to the login page if he/she is not logged in. 
# The user is redirected to the user page if he/she is logged in. 
# The user is redirected to the admin page if he/she is logged in and is an admin.

from flask import Flask, redirect, url_for

app = Flask(__name__)

@app.route("/")
def home():
    # Check if user is logged in
    if not is_logged_in():
        return redirect(url_for("login"))

    # Check if user is an admin
    if is_admin():
        return redirect(url_for("admin"))

    # User is logged in but not an admin
    return redirect(url_for("user"))

@app.route("/login")
def login():
    # Logic for login page
    return "Login Page"

@app.route("/user")
def user():
    # Logic for user page
    return "User Page"

@app.route("/admin")
def admin():
    # Logic for admin page
    return "Admin Page"

def is_logged_in():
    # Logic to check if user is logged in
    return False  # Replace with your own implementation

def is_admin():
    # Logic to check if user is an admin
    return False  # Replace with your own implementation

if __name__ == "__main__":
    app.run()