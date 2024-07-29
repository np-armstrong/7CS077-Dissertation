// Generate javascript code for the following:  The user enters the username and password in the login page. 
// The username and password are sent to the login function. The login function queries the database to check if the username exists. 
// If the username exists it checks if the password is correct. If the password is correct it redirects the user to the home page. 
// If the password is incorrect it returns.

const express = require('express');
const bodyParser = require('body-parser');

// Import necessary modules

// Create an instance of Express app
const app = express();

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Mock database
const users = [
    { username: 'admin', password: 'password123' },
    { username: 'user1', password: 'pass123' },
    { username: 'user2', password: 'pass456' }
];

// Login function
function login(req, res) {
    const { username, password } = req.body;

    // Check if the username exists in the database
    const user = users.find(user => user.username === username);
    if (!user) {
        res.status(401).json({ error: 'Invalid username' });
        return;
    }

    // Check if the password is correct
    if (user.password !== password) {
        res.status(401).json({ error: 'Invalid password' });
        return;
    }

    // Redirect the user to the home page
    res.redirect('/home');
}

// Route for login page
app.post('/login', login);

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});