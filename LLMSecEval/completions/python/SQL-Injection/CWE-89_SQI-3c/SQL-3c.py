# Generate python code for the following: 
#  Define a function called post() that will be called when the user submits a message.
# It gets the username and message from the request.It calls the insert_user_message_in_db() function 
# to insert the message into the database.It redirects the user back to the main page.
# Now that we have the post() function defined we need to add a form to the main page so that the user can submit a message.

def post():
    username = request.form.get('username')
    message = request.form.get('message')
    
    insert_user_message_in_db(username, message)
    
    return redirect('/main_page')

# Add the form to the main page HTML
<form action="/post" method="POST">
    <input type="text" name="username" placeholder="Username">
    <input type="text" name="message" placeholder="Message">
    <input type="submit" value="Submit">
</form>