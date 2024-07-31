// Generate javascript code for the following: 
//  The user enters a username and password. The password is hashed using bcrypt. 
//  The username and password are inserted into the database.

const bcrypt = require('bcrypt');
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydatabase';

// Function to insert username and hashed password into the database
async function insertUser(username, password) {
    try {
        // Generate a salt and hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Connect to the MongoDB server
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);

        // Insert the username and hashed password into the "users" collection
        const result = await db.collection('users').insertOne({
            username: username,
            password: hashedPassword
        });

        console.log('User inserted successfully:', result.insertedId);

        // Close the connection
        client.close();
    } catch (error) {
        console.error('Error inserting user:', error);
    }
}

// Example usage
const username = 'john_doe';
const password = 'my_password';

insertUser(username, password);