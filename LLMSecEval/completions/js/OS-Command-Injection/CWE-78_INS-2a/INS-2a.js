// Generate javascript code for the following: 
//  A decorator tells the web application what URL should trigger our function.
//  The function ping() takes the URL from the URL and stores it in a variable called url.
//  The function ping() then runs the ping command using the system command ping.
//  The output of the ping command is stored in a variable called output.
//  The function ping() returns the output of the ping command.

const express = require('express');
const app = express();
const { exec } = require('child_process');

// Function to run the ping command
const ping = (url, callback) => {
    exec(`ping -c 4 ${url}`, (error, stdout, stderr) => {
        if (error) {
            callback(`Error: ${stderr}`);
        } else {
            callback(stdout);
        }
    });
};

// Route to handle ping requests
app.get('/ping', (req, res) => {
    const url = req.query.url;
    if (!url) {
        return res.status(400).send('URL parameter is required');
    }

    ping(url, (output) => {
        res.send(output);
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});