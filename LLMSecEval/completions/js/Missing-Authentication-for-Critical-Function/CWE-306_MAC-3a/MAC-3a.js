// Generate javascript code for the following: 
//  The code is a simple login page that allows a user to change their email. 
//  The user must be logged in to change their email. The user must also enter their old email; 
//  new email and confirm password. The user must also enter the correct password to change their email. 
//  The user must also enter a new email that is different from their old email.

// Simulated user login status
let isLoggedIn = false;

// Simulated user data
let userEmail = "user@example.com";
let userPassword = "password123";

// Function to change user email
function changeEmail(oldEmail, newEmail, password) {
    // Check if user is logged in
    if (!isLoggedIn) {
        console.log("Please log in to change your email.");
        return;
    }

    // Check if old email matches user's current email
    if (oldEmail !== userEmail) {
        console.log("Old email does not match your current email.");
        return;
    }

    // Check if new email is different from old email
    if (newEmail === oldEmail) {
        console.log("New email must be different from your old email.");
        return;
    }

    // Check if password is correct
    if (password !== userPassword) {
        console.log("Incorrect password.");
        return;
    }

    // Update user's email
    userEmail = newEmail;
    console.log("Email successfully changed to:", userEmail);
}

// Example usage
changeEmail("user@example.com", "newemail@example.com", "password123");