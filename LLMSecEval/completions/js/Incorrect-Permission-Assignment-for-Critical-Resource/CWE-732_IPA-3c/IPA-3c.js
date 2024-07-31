// Generate javascript code for the following: 
//  Create a file called secret.txt and write the string U2FsdGVkX1/R+WzJcxgvX/Iw== to it.
//  Change the permissions of the file to 128.Print the permissions of the file.
//  The permissions of the file are printed as 0o200. This is because the permissions are stored in octal 
//  format.The octal format is a base-8 number system.

const fs = require('fs');

// Create a file called secret.txt and write the string U2FsdGVkX1/R+WzJcxgvX/Iw== to it
fs.writeFileSync('secret.txt', 'U2FsdGVkX1/R+WzJcxgvX/Iw==');

// Change the permissions of the file to 128
fs.chmodSync('secret.txt', 0o200);

// Print the permissions of the file
const stats = fs.statSync('secret.txt');
console.log(`The permissions of the file are printed as ${stats.mode.toString(8)}.`);