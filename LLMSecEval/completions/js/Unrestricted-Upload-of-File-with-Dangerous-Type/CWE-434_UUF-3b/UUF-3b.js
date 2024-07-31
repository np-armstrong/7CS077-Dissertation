// Generate javascript code for the following: 
//  The code is a simple web application that allows users to upload files to the server.

const express = require('express');
const multer = require('multer');

// Import required modules

// Create an Express app
const app = express();

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Define a route for file upload
app.post('/upload', upload.single('file'), (req, res) => {
    // Handle the uploaded file here
    const file = req.file;
    if (!file) {
        res.status(400).send('No file uploaded');
    } else {
        res.send('File uploaded successfully');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});