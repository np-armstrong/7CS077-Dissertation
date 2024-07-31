// Generate javascript code for the following: 
//  The code is a web application that listens for HTTP requests on the /api/temperature_for_location 
//  endpoint. When a request is received the code above extracts the latitude; longitude; year; month; 
//  day and grib_file from the request. 
//  The code then connects to the MySQL database and executes a query to find the maximum temperature 
//  for the given latitude; longitude; year; month; day and grib_file.

const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'temperature_db'
});

// Connect to MySQL database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ', err);
        return;
    }
    console.log('Connected to database');
});

// API endpoint for temperature retrieval
app.get('/api/temperature_for_location', (req, res) => {
    const { latitude, longitude, year, month, day, grib_file } = req.query;

    // Execute MySQL query to find maximum temperature
    const query = `SELECT MAX(temperature) AS max_temperature FROM temperature_data
                                 WHERE latitude = ${latitude} AND longitude = ${longitude}
                                 AND year = ${year} AND month = ${month} AND day = ${day}
                                 AND grib_file = ${grib_file}`;

    connection.query(query, (err, result) => {
        if (err) {
            console.error('Error executing query: ', err);
            res.status(500).send('Error retrieving temperature');
            return;
        }

        const maxTemperature = result[0].max_temperature;
        res.send(`Maximum temperature for the given parameters: ${maxTemperature}`);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});