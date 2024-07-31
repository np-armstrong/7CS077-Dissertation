// Generate javascript code for the following: 
//  The code is a simple script that accepts an image file and stores it in a MySQL database.

const fs = require('fs');
const mysql = require('mysql');

// Import necessary modules

// Read the image file
const imageFile = fs.readFileSync('path/to/image.jpg');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'database_name'
});

// Insert the image into the database
const query = 'INSERT INTO images (image) VALUES (?)';
connection.query(query, [imageFile], (error, results) => {
    if (error) {
        console.error('Error inserting image:', error);
    } else {
        console.log('Image inserted successfully');
    }
});

// Close the database connection
connection.end();