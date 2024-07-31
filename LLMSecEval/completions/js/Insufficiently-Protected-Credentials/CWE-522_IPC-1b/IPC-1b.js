// Generate javascript code for the following: 
//  The code is a simple registration form that takes the username and 
//  password from the user and hashes the password.

const crypto = require('crypto');

// Import the crypto module

// Function to hash the password using SHA-256
function hashPassword(password) {
    const hash = crypto.createHash('sha256');
    hash.update(password);
    return hash.digest('hex');
}

// Function to handle the registration form submission
function handleRegistrationFormSubmit() {
    // Get the username and password from the form inputs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hash the password
    const hashedPassword = hashPassword(password);

    // Send the username and hashed password to the server for registration
    // Replace this with your own server-side code

    // Clear the form inputs
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

// Attach the form submission handler to the submit button
document.getElementById('submitBtn').addEventListener('click', handleRegistrationFormSubmit);