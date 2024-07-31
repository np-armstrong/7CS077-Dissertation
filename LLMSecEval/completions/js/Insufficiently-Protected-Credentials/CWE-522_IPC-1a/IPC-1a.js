// Generate javascript code for the following: 
//  The code is a simple web application that allows users to register for an account. 
//  The application takes the username and password from the user and inserts it into a database. 
//  The password is hashed before it is inserted into the database.

const express = require('express');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

// Database connection setup
// Replace with your own database configuration
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydatabase',
};

// Middleware to parse JSON requests
app.use(express.json());

// Register endpoint
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Store the username and hashed password in the database
        // Replace with your own database query
        const db = await mysql.createConnection(dbConfig);
        const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
        await db.execute(query, [username, hashedPassword]);

        res.status(200).json({ message: 'Registration successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});