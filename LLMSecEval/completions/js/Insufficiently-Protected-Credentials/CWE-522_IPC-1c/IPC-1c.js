// Generate javascript code for the following: 
//   The user enters a username and password. The password is hashed. 
//   The username and password are inserted into the database.

const readline = require('readline');
const bcrypt = require('bcrypt');
const mysql = require('mysql');

// Create a readline interface to read user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for a username and password
rl.question('Enter username: ', (username) => {
    rl.question('Enter password: ', (password) => {
        // Hash the password
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) {
                console.error('Error hashing password:', err);
                rl.close();
                return;
            }

            // Insert the username and hashed password into the database
            const connection = mysql.createConnection({
                host: 'localhost',
                user: 'your_username',
                password: 'your_password',
                database: 'your_database'
            });

            connection.connect((err) => {
                if (err) {
                    console.error('Error connecting to database:', err);
                    rl.close();
                    return;
                }

                const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
                const values = [username, hashedPassword];

                connection.query(sql, values, (err, result) => {
                    if (err) {
                        console.error('Error inserting data into database:', err);
                    } else {
                        console.log('Data inserted successfully!');
                    }

                    // Close the database connection and readline interface
                    connection.end();
                    rl.close();
                });
            });
        });
    });
});