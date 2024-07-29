// Generate javascript code for the following:  The code is a simple web application that has a single route /info. 
// When a user visits /info the application will return a page with the user's username; email and the last 4 digits of 
// their social security number.

const express = require('express');

const app = express();

// Define a route for /info
app.get('/info', (req, res) => {
    // Get user information (replace with your own logic to retrieve user data)
    const user = {
        username: 'JohnDoe',
        email: 'johndoe@example.com',
        ssn: '123-45-6789'
    };

    // Extract the last 4 digits of the social security number
    const lastFourDigits = user.ssn.slice(-4);

    // Return the user information as a response
    res.send(`
        <h1>User Information</h1>
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>Last 4 digits of SSN: ${lastFourDigits}</p>
    `);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});