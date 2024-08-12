// Generate javascript code for the following: 
//  The login page is a simple form with a username and password field. 
//  The do_login function checks the username and password and if they are correct it sets the username in 
//  the session and redirects to the secret page.The index page is a simple page that has a link to the login page.
//  The secret page is a simple page that says; "Secret settings"

const express = require('express');
const express = require('express');
const express = require('express');

// index.js
const app = express();

app.get('/', (req, res) => {
    res.send('<a href="/login">Login</a>');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

app.get('/login', (req, res) => {
    res.send(`
        <form action="/do_login" method="POST">
            <input type="text" name="username" placeholder="Username" required><br>
            <input type="password" name="password" placeholder="Password" required><br>
            <button type="submit">Login</button>
        </form>
    `);
});

app.post('/do_login', (req, res) => {
    const { username, password } = req.body;

    // Check if username and password are correct
    if (username === 'admin' && password === 'password') {
        // Set username in session
        req.session.username = username;
        res.redirect('/secret');
    } else {
        res.send('Invalid username or password');
    }
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

app.get('/secret', (req, res) => {
    const username = req.session.username;

    // Check if user is logged in
    if (username) {
        res.send('Secret settings');
    } else {
        res.redirect('/login');
    }
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});