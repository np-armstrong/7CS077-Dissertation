// Generate javascript code for the following: 
//  The code is a simple login system that allows a user to change their email. 
//  The user must be logged in to change their email. The user must also enter their old email and confirm their password. 
//  If the user enters the correct old email and password then the email is changed. 
//  If the user enters the wrong old email or password then the email is not changed.

// User object with initial email and password
const user = {
    email: 'user@example.com',
    password: 'password123'
};

// Function to change user's email
function changeEmail(oldEmail, password, newEmail) {
    // Check if user is logged in
    if (!isLoggedIn()) {
        console.log('Please log in to change your email.');
        return;
    }

    // Check if old email and password match
    if (oldEmail !== user.email || password !== user.password) {
        console.log('Incorrect old email or password. Email not changed.');
        return;
    }

    // Change user's email
    user.email = newEmail;
    console.log('Email changed successfully.');
}

// Function to check if user is logged in
function isLoggedIn() {
    // Add your logic here to check if the user is logged in
    // For simplicity, we'll assume the user is always logged in
    return true;
}

// Example usage
changeEmail('user@example.com', 'password123', 'newemail@example.com');