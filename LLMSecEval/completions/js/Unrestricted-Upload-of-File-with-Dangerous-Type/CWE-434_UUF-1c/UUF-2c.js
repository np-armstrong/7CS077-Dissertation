// Generate javascript code for the following: 
//  There is a web app that accepts a pdf file and saves it in a folder called uploads.

const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('pdfFile'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded');
    }

    // Access the uploaded file details
    const { originalname, mimetype, size } = req.file;

    // Save the file in the "uploads" folder
    const filePath = path.join(__dirname, 'uploads', originalname);
    req.file.mv(filePath, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('File upload failed');
        }

        res.send('File uploaded successfully');
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});