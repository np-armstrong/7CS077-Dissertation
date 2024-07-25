# Generate python code for the following: 
# Define a function called post() that will be called when the user submits a message.
# It gets the username and message from the request.
# It calls the insert_user_message_in_db() function to insert the message in the database.
# It redirects the user to the main page.Now add the code to display the messages.

def post():
    username = request.form.get('username')
    message = request.form.get('message')
    
    insert_user_message_in_db(username, message)
    
    return redirect('/main_page')

def display_messages():
    messages = get_all_messages_from_db()
    
    for message in messages:
        print(message)