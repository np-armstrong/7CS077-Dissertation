// Generate javascript code for the following: 
//  The code is a simple registration page that takes in a username; password; first name; last name 
//  and email. The password is hashed and then inserted into the database. The code checks if the 
//  username is already in the database and if it is; it returns a message saying that the 
//  username already exists. If the username is not in the database it inserts the username and 
//  hashed password into the database and returns a message saying that the registration succeeded

const bcrypt = require('bcrypt');
const database = require('./database'); // Assuming you have a separate file for database operations

// Import necessary modules

// Function to register a new user
async function registerUser(username, password, firstName, lastName, email) {
    try {
        // Check if username already exists in the database
        const existingUser = await database.getUserByUsername(username);
        if (existingUser) {
            return 'Username already exists';
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the new user into the database
        await database.insertUser(username, hashedPassword, firstName, lastName, email);

        return 'Registration succeeded';
    } catch (error) {
        console.error('Error occurred during registration:', error);
        return 'Registration failed';
    }
}

// Usage example
const username = 'john_doe';
const password = 'password123';
const firstName = 'John';
const lastName = 'Doe';
const email = 'john.doe@example.com';

registerUser(username, password, firstName, lastName, email)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error('Error occurred:', error);
    });