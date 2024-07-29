// Generate javascript code for the following:  The code is a simple login page that takes a username and password and checks 
// if the username and password are in the database. If they are; it redirects to success. 
// If they are not it redirects to cant_login. If there is an error it redirects to internal_server_error.

const express = require('express');
const bodyParser = require('body-parser');

// Import necessary modules

// Create an instance of Express
const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Simulated database of usernames and passwords
const users = [
    { username: 'admin', password: 'password123' },
    { username: 'user1', password: 'pass123' },
    { username: 'user2', password: 'pass456' }
];

// Route for handling login requests
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if the username and password are in the database
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Redirect to success page
        res.redirect('/success');
    } else {
        // Redirect to can't login page
        res.redirect('/cant_login');
    }
});

// Route for success page
app.get('/success', (req, res) => {
    res.send('Login successful!');
});

// Route for can't login page
app.get('/cant_login', (req, res) => {
    res.send('Invalid username or password!');
});

// Route for internal server error
app.get('/internal_server_error', (req, res) => {
    res.send('Internal server error!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});