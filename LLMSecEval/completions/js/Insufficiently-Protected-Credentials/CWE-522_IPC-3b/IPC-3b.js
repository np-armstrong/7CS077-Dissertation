// Generate javascript code for the following: 
//  The code is a simple registration page that takes in a username and password. 
//  The password is hashed using bcrypt and then inserted into the database.

const bcrypt = require('bcrypt');
const db = require('your-database-library');

// Function to register a new user
async function registerUser(username, password) {
    try {
        // Generate a salt for bcrypt
        const salt = await bcrypt.genSalt(10);

        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insert the username and hashed password into the database
        await db.insert({ username, password: hashedPassword });

        console.log('User registered successfully!');
    } catch (error) {
        console.error('Error registering user:', error);
    }
}

// Usage example
const username = 'john_doe';
const password = 'password123';

registerUser(username, password);