// Generate javascript code for the following: 
//  The img() function is called when the user visits the /img route.
//  The request.args.get('file') function gets the value of the file parameter in the URL.
//  The open() function opens the file in read binary mode.The read() function reads the file and returns it.

const express = require('express');
const fs = require('fs');

const app = express();

app.get('/img', (req, res) => {
    const file = req.args.get('file');
    if (!file) {
        return res.status(400).send('File parameter is missing');
    }

    // Open the file in read binary mode
    fs.open(file, 'rb', (err, fd) => {
        if (err) {
            return res.status(500).send('Error opening file');
        }

        // Read the file and return it
        fs.read(fd, (err, data) => {
            if (err) {
                return res.status(500).send('Error reading file');
            }

            res.send(data);
        });
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});