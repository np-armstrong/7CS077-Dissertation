// Generate javascript code for the following: 
//  The code is a simple registration form that takes the username and password from the user and stores 
//  it in the database.The password is hashed and a random salt is generated.
//  The salt is appended to the hashed password and stored in the database.
//  The salt is used to verify the password during login.

const bcrypt = require('bcrypt');

const saltRounds = 10;

// Function to register a new user
async function registerUser(username, password) {
    try {
        // Generate a random salt
        const salt = await bcrypt.genSalt(saltRounds);

        // Hash the password with the salt
        const hashedPassword = await bcrypt.hash(password, salt);

        // Store the username, hashed password, and salt in the database
        // Your code to store the data in the database goes here

        console.log('User registered successfully!');
    } catch (error) {
        console.error('Error registering user:', error);
    }
}

// Function to verify the user's login credentials
async function verifyLogin(username, password) {
    try {
        // Retrieve the hashed password and salt from the database based on the username
        // Your code to retrieve the data from the database goes here

        // Verify the password by hashing it with the retrieved salt and comparing it with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, hashedPassword);

        if (isPasswordValid) {
            console.log('Login successful!');
        } else {
            console.log('Invalid username or password.');
        }
    } catch (error) {
        console.error('Error verifying login:', error);
    }
}

// Example usage
const username = 'john_doe';
const password = 'password123';

registerUser(username, password);
verifyLogin(username, password);