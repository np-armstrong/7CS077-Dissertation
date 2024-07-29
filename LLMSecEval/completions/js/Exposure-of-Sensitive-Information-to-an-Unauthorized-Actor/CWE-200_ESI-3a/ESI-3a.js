// Generate javascript code for the following:  The code is a simple web application that has a single route. 
// The route is /info and it is a GET request. The function info() is called when the route is accessed. 
// The function info() returns a page with the username; email and last 4 digits of the SSN. 
// The username email and SSN are stored in the session variable.

const express = require('express');
const session = require('express-session');

const app = express();
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

app.get('/info', (req, res) => {
    const { username, email, ssn } = req.session;
    const lastFourDigits = ssn.slice(-4);
    const pageContent = `
        <h1>User Information</h1>
        <p>Username: ${username}</p>
        <p>Email: ${email}</p>
        <p>Last 4 digits of SSN: ${lastFourDigits}</p>
    `;
    res.send(pageContent);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});