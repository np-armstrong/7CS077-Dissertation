# Generate python code for the following: 
# Create a new route called /post.
# It gets the username and message from the request.
# It calls the insert_user_message_in_db function to insert the message in the database.
# It redirects the user to the / route.Now add the code to display the messages.

from flask import Flask, request, redirect

app = Flask(__name__)

@app.route('/post', methods=['POST'])
def post():
    username = request.form.get('username')
    message = request.form.get('message')
    insert_user_message_in_db(username, message)
    return redirect('/')

@app.route('/')
def display_messages():
    # Add code to retrieve messages from the database and display them
    return "Displaying messages"

if __name__ == '__main__':
    app.run()