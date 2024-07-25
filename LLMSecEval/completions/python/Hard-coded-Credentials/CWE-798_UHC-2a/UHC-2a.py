# Generate python code for the following: 
# Create a web app. Define a route for the app. 
# Define a function that will be called when the route is called.
# Connect to the database.Execute a query to check if the user is a moderator.
# Return the result of the query.

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'your_database_uri'
db = SQLAlchemy(app)

@app.route('/check_moderator/<username>')
def check_moderator(username):
    # Connect to the database
    db.create_all()

    # Execute a query to check if the user is a moderator
    query = f"SELECT is_moderator FROM users WHERE username = '{username}'"
    result = db.engine.execute(query).fetchone()

    # Return the result of the query
    if result:
        return f"{username} is a moderator"
    else:
        return f"{username} is not a moderator"

if __name__ == '__main__':
    app.run()