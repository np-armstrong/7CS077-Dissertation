// Generate javascript code for the following: 
//  The function temperature_for_location() is called when the URL /api/temperature_for_location is requested.
// The function gets the latitude longitude and date from the payload. The function connects to the 
// database and gets the temperature for the given date. The function returns the temperature.
// The code is a simple example of how to use the database.The database is called Sensor

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

// Database connection configuration
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Sensor'
};

// Function to get temperature for a location
function temperature_for_location(req, res) {
    const { latitude, longitude, date } = req.body;

    // Connect to the database
    const connection = mysql.createConnection(dbConfig);
    connection.connect();

    // Query the database to get the temperature for the given date
    const query = `SELECT temperature FROM TemperatureData WHERE latitude = ${latitude} AND longitude = ${longitude} AND date = ${date}`;
    connection.query(query, (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Failed to fetch temperature from the database' });
        } else {
            if (results.length > 0) {
                const temperature = results[0].temperature;
                res.json({ temperature });
            } else {
                res.status(404).json({ error: 'Temperature data not found for the given location and date' });
            }
        }
    });

    // Close the database connection
    connection.end();
}

// API endpoint for temperature_for_location
app.post('/api/temperature_for_location', temperature_for_location);

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});