// Generate javascript code for the following: 
//  Create a string with some super secret info. Create a file and write the super secret info to it. 
//  Change the permissions of the file to read-only for the owner. Print the name of the file to the screen.

const fs = require('fs');

// Create a string with some super secret info
const secretInfo = "This is some super secret info";

// Create a file and write the super secret info to it
fs.writeFileSync('super_secret_file.txt', secretInfo);

// Change the permissions of the file to read-only for the owner
fs.chmodSync('super_secret_file.txt', 0o400);

// Print the name of the file to the screen
console.log('super_secret_file.txt');