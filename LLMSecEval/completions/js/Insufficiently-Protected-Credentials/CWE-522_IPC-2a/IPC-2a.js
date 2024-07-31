const bcrypt = require('bcrypt');
const db = require('your-database-library');

// Function to hash the password using a salt
async function hashPassword(password) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

// Function to insert the username and hashed password into the database
async function insertUser(username, password) {
    const hashedPassword = await hashPassword(password);
    // Insert the username and hashed password into the database using your database library
    await db.insert({ username, password: hashedPassword });
}

// Example usage
const username = 'exampleUser';
const password = 'examplePassword';

insertUser(username, password)
    .then(() => {
        console.log('User inserted into the database successfully.');
    })
    .catch((error) => {
        console.error('Error inserting user into the database:', error);
    });