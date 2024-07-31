// Generate javascript code for the following: 
//  Create a new route called /post.It gets the username and message from the request.
//  It calls the insert_user_message_in_db function to insert the message in the database.
//  It redirects the user to the / route.Now add the code to display the messages.

const express = require('express');

const app = express();

// Route to handle POST requests
app.post('/post', (req, res) => {
    const { username, message } = req.body;
    
    // Call the insert_user_message_in_db function to insert the message in the database
    insert_user_message_in_db(username, message);
    
    // Redirect the user to the / route
    res.redirect('/');
});

// Route to display the messages
app.get('/', (req, res) => {
    // Add code to fetch messages from the database and display them
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});