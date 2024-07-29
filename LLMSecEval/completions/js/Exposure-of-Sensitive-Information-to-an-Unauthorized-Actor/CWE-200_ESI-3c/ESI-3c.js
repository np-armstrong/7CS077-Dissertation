// Generate javascript code for the following: The code is a simple web application that has a single route. 
// The route is /info and it is a GET request. The function info() is called when the route is accessed. 
// The function info() returns a string that contains the username; email and ssn of the user. 
// The username email and ssn are stored in the session variable.

const express = require('express');
const session = require('express-session');

const app = express();

// Set up session middleware
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

// Define the /info route
app.get('/info', (req, res) => {
    // Retrieve user information from the session
    const { username, email, ssn } = req.session;

    // Return the user information as a string
    const userInfo = `Username: ${username}\nEmail: ${email}\nSSN: ${ssn}`;
    res.send(userInfo);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});