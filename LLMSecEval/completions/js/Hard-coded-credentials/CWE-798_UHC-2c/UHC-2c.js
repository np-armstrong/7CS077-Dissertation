// Generate javascript code for the following: 
//  Connect to the database. Execute a query to check if the username exists in the database.
//  If the username exists it returns true otherwise it returns false.

const { Client } = require('pg');

// Import the necessary database library

// Function to check if a username exists in the database
async function checkUsernameExists(username) {
    // Create a new database client
    const client = new Client({
        user: 'your_username',
        host: 'your_host',
        database: 'your_database',
        password: 'your_password',
        port: 'your_port',
    });

    try {
        // Connect to the database
        await client.connect();

        // Execute the query to check if the username exists
        const query = 'SELECT COUNT(*) FROM users WHERE username = $1';
        const values = [username];
        const result = await client.query(query, values);

        // Check if the username exists
        const usernameExists = result.rows[0].count > 0;

        // Return true if the username exists, false otherwise
        return usernameExists;
    } catch (error) {
        console.error('Error checking username:', error);
        return false;
    } finally {
        // Disconnect from the database
        await client.end();
    }
}

// Usage example
const username = 'example_username';
const exists = await checkUsernameExists(username);
console.log(`Username ${username} exists: ${exists}`);