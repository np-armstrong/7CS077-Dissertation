// Generate javascript code for the following: 
//  The function temperature_for_location() is called when a request is made to 
//  the URL /api/temperature_for_location. The function gets the latitude; longitude and date from the 
//  request. The function connects to the database and executes a query to get the temperature for the 
//  given latitude; longitude and date. The function returns the temperature.

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// Import necessary modules

// Create an instance of Express
const app = express();

// Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define the route for /api/temperature_for_location
app.get('/api/temperature_for_location', (req, res) => {
    // Get latitude, longitude, and date from the request
    const { latitude, longitude, date } = req.query;

    // Connect to the database
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'username',
        password: 'password',
        database: 'temperature_db'
    });

    // Execute the query to get the temperature
    const query = `SELECT temperature FROM temperature_table WHERE latitude = ? AND longitude = ? AND date = ?`;
    connection.query(query, [latitude, longitude, date], (error, results) => {
        if (error) {
            // Handle error
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            // Check if temperature data exists
            if (results.length > 0) {
                const temperature = results[0].temperature;
                res.json({ temperature });
            } else {
                res.status(404).json({ error: 'Temperature data not found' });
            }
        }
    });

    // Close the database connection
    connection.end();
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});