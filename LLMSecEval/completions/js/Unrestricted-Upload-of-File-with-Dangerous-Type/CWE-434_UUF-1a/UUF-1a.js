// Generate javascript code for the following: 
//  The upload_pdf() function is called when the user uploads a pdf file. 
//  The pdf file is saved in the uploads folder. The filepath of the pdf file is saved in the mysql database. 
//  The filepath is then used to download the pdf file.

const mysql = require('mysql');
const fs = require('fs');
const path = require('path');

// Function to handle file upload
function upload_pdf(file) {
    // Save the uploaded file to the uploads folder
    const uploadPath = path.join(__dirname, 'uploads', file.name);
    fs.writeFileSync(uploadPath, file.data);

    // Save the file path in the MySQL database
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'username',
        password: 'password',
        database: 'database_name'
    });

    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL database:', err);
            return;
        }

        const filePath = '/uploads/' + file.name;
        const query = `INSERT INTO files (filepath) VALUES ('${filePath}')`;

        connection.query(query, (err, result) => {
            if (err) {
                console.error('Error inserting file path into database:', err);
                return;
            }

            console.log('File path inserted into database:', filePath);
        });

        connection.end();
    });
}

// Function to download the pdf file
function download_pdf(filepath) {
    const downloadPath = path.join(__dirname, filepath);
    fs.readFile(downloadPath, (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        // Code to send the file data as a response to the client
        // For example, if using Express.js:
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=download.pdf');
        res.send(data);
    });
}