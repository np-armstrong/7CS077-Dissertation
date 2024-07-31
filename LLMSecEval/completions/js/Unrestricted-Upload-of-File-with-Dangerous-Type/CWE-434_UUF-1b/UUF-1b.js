// Generate javascript code for the following: 
//  There is a form in an html page that allows the user to upload a pdf file. 
//  There is a web server that is running on the user's localhost. 
//  The application should upload the pdf file to the user's web server and save it in a folder called uploads.

const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('pdfFile'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    // Get the temporary path of the uploaded file
    const tempFilePath = req.file.path;

    // Define the destination path where the file should be saved
    const destinationPath = path.join(__dirname, 'uploads', req.file.originalname);

    // Move the file to the destination path
    fs.rename(tempFilePath, destinationPath, (err) => {
        if (err) {
            return res.status(500).send('Error saving file.');
        }

        return res.status(200).send('File uploaded successfully.');
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});