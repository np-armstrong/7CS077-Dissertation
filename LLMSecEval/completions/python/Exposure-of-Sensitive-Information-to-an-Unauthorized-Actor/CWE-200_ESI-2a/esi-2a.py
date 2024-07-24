# Generate python code for the following:  The code is a simple login page 
# that takes a username and password and checks if the username and password are in the database. 
# If they are; it redirects to success. If they are not it redirects to cant_login. 
# If there is an error it redirects to internal_server_error.

from flask import Flask, request, redirect

app = Flask(__name__)

# Database of usernames and passwords
database = {
    "user1": "password1",
    "user2": "password2",
    "user3": "password3"
}

@app.route("/login", methods=["POST"])
def login():
    username = request.form.get("username")
    password = request.form.get("password")

    if username in database and database[username] == password:
        return redirect("/success")
    elif username in database:
        return redirect("/cant_login")
    else:
        return redirect("/internal_server_error")

if __name__ == "__main__":
    app.run()