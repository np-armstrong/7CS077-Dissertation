// Generate javascript code for the following: 
//  The user enters their email address into the unsubscribe form on the website. 
//  The email address is passed to the unsubscribe function.
//  The unsubscribe function connects to the database and checks if the email address is in the database.
//  If the email address is in the database it is removed.
//  If the email address is not in the database the user is told that they are not in the database.

// Function to unsubscribe user
function unsubscribe(email) {
    // Connect to the database and check if email exists
    // Replace the following code with your actual database connection and query logic
    const database = [
        'user1@example.com',
        'user2@example.com',
        'user3@example.com'
    ];
    
    if (database.includes(email)) {
        // Remove email from the database
        const index = database.indexOf(email);
        database.splice(index, 1);
        console.log('Email removed successfully.');
    } else {
        console.log('Email not found in the database.');
    }
}

// Example usage
const userEmail = 'user1@example.com'; // Replace with the actual user input
unsubscribe(userEmail);