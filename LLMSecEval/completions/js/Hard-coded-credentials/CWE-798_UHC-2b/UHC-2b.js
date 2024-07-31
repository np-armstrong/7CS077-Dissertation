// Generate javascript code for the following: 
//  Connect to the database using the credentials stored in the environment variables.
//  Execute a query to check if the user is a moderator.
//  Return True if the user is a moderator False otherwise.

const { Client } = require('pg');

// Import the necessary modules

// Connect to the database using environment variables
const client = new Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

// Function to check if the user is a moderator
async function checkIfUserIsModerator(userId) {
    try {
        // Connect to the database
        await client.connect();

        // Execute the query to check if the user is a moderator
        const result = await client.query('SELECT is_moderator FROM users WHERE id = $1', [userId]);

        // Return true if the user is a moderator, false otherwise
        return result.rows[0].is_moderator;
    } catch (error) {
        console.error('Error occurred while checking if user is a moderator:', error);
        return false;
    } finally {
        // Disconnect from the database
        await client.end();
    }
}

// Usage example
const userId = 123; // Replace with the actual user ID
checkIfUserIsModerator(userId)
    .then(isModerator => console.log('Is user a moderator?', isModerator))
    .catch(error => console.error('Error occurred:', error));