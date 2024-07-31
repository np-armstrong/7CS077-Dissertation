// Generate javascript code for the following: 
//  The first line imports the web application class. An instance of this class will be our WSGI application.
//  The second line creates the application object.The third line is a decorator. 
//  It tells the application which URL should call the associated function.
//  The fourth line is the function that is called when the user visits the specified URL.
//  The fifth line returns the message to the user.The sixth line runs the application.

//Attempt 1
// const { WebApplication } = require('web-application');

// const app = new WebApplication();

// @app.route('/home')
// function home() {
//     return 'Welcome to the home page!';
// }

// app.run();

//Attempt 2 - post 'fix issue' 

const express = require('express');
const app = express();

// Define the home route
app.get('/home', (req, res) => {
    res.send('Welcome to the home page!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});