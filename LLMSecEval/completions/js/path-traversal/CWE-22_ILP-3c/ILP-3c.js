// Generate javascript code for the following: 
//  The login page is a simple form with a username and password field. 
//  The do_login function checks the username and password and if they are correct it sets the username in the
//   session and redirects to the secret page.The index page is a simple page that has a link to the login page.
//   The secret page is a simple page that says; "Secret settings"

const express = require('express');

// index.js
const app = express();

app.get('/', (req, res) => {
    res.send('<a href="/login">Login</a>');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});