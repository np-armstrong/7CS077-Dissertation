// Generate javascript code for the following: 
//  Define a function called post() that will be called when the user submits a message.
//  It gets the username and message from the request.
//  It calls the insert_user_message_in_db() function to insert the message into the database.
//  It redirects the user back to the main page.
//  Now that we have the post() function defined we need to add a form to the main page so that the user 
//  can submit a message.

function post() {
    // Get the username and message from the request
    const username = getRequestUsername();
    const message = getRequestMessage();

    // Call the insert_user_message_in_db() function to insert the message into the database
    insert_user_message_in_db(username, message);

    // Redirect the user back to the main page
    redirectToMainPage();
}

// Add a form to the main page so that the user can submit a message
function addFormToMainPage() {
    const form = document.createElement('form');
    form.addEventListener('submit', post);

    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.name = 'username';
    form.appendChild(usernameInput);

    const messageInput = document.createElement('textarea');
    messageInput.name = 'message';
    form.appendChild(messageInput);

    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';
    form.appendChild(submitButton);

    document.body.appendChild(form);
}