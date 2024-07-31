// Generate javascript code for the following: 
//  The user enters the stock name and quantity in the form.The form is submitted to the buy_order route.
//  The buy_order route takes the stock name and quantity and inserts it into the database.
//  The user is redirected to the stock_view page.The code is a very simple example of how to insert data 
//  into a database.

const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database',
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ', err);
        return;
    }
    console.log('Connected to the database');
});

// Set up a route to handle the form submission
app.post('/buy_order', (req, res) => {
    const { stockName, quantity } = req.body;

    // Insert the data into the database
    const query = `INSERT INTO stocks (name, quantity) VALUES ('${stockName}', ${quantity})`;
    connection.query(query, (err, result) => {
        if (err) {
            console.error('Error inserting data into the database: ', err);
            return;
        }
        console.log('Data inserted successfully');

        // Redirect the user to the stock_view page
        res.redirect('/stock_view');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});