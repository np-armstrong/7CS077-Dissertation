// Generate javascript code for the following: 
//  The first function is the login function. It is a GET request. 
//  It will return a form for the user to enter their username and password. 
//  The second function is the do_login function. It is a POST request. 
//  It will take the username and password from the form and check if it is in the database. 
//  If it is it will redirect the user to the user_page. If it is not it will return.

const express = require('express');
const bodyParser = require('body-parser');

// Import necessary modules

// Create an instance of the express app
const app = express();

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: false }));

// Database of users
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' }
];

// Login function - GET request
app.get('/login', (req, res) => {
    // Return the login form
    res.send(`
        <h1>Login</h1>
        <form action="/do_login" method="post">
            <input type="text" name="username" placeholder="Username" required><br>
            <input type="password" name="password" placeholder="Password" required><br>
            <button type="submit">Login</button>
        </form>
    `);
});

// Do login function - POST request
app.post('/do_login', (req, res) => {
    // Get the username and password from the request body
    const { username, password } = req.body;

    // Check if the username and password match any user in the database
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Redirect the user to the user_page
        res.redirect('/user_page');
    } else {
        // Return if the username and password are not valid
        res.send('Invalid username or password');
    }
});

// User page
app.get('/user_page', (req, res) => {
    res.send('<h1>Welcome to the user page!</h1>');
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});