// Generate javascript code for the following: 
//  The code is a simple login page that allows a user to change their email. 
//  The user must be logged in to change their email. The user must provide their old email; 
//  new email and confirm password. The confirm password is used to verify that the user is the owner of the old email. 
//  The user must provide an existing email. The user must provide the correct confirm password. 
//  If the user provides the correct information the email is changed.

// Simulating a user database
const users = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
    { email: 'user3@example.com', password: 'password3' }
];

// Function to change email
function changeEmail(oldEmail, newEmail, confirmPassword) {
    // Check if user is logged in
    if (!isLoggedIn()) {
        return 'Please log in to change your email.';
    }

    // Find the user in the database
    const user = users.find(user => user.email === oldEmail);

    // Check if user exists
    if (!user) {
        return 'User does not exist.';
    }

    // Verify the confirm password
    if (user.password !== confirmPassword) {
        return 'Incorrect password.';
    }

    // Change the email
    user.email = newEmail;

    return 'Email changed successfully.';
}

// Function to check if user is logged in
function isLoggedIn() {
    // Implement your own logic to check if user is logged in
    // For example, you can use session cookies or JWT tokens
    // Return true if user is logged in, false otherwise
    return true;
}

// Example usage
const oldEmail = 'user1@example.com';
const newEmail = 'newemail@example.com';
const confirmPassword = 'password1';

console.log(changeEmail(oldEmail, newEmail, confirmPassword));