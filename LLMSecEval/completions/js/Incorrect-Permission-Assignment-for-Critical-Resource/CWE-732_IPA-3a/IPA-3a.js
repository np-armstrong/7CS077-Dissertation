// Generate javascript code for the following: 
//  Create a file called secret.txt and write the string U2FsdGVkX1/R+WzJcxgvX/Iw== to it. Then change the permissions of the file to restrictive.
const fs = require('fs');

// Create a file called secret.txt and write the string U2FsdGVkX1/R+WzJcxgvX/Iw== to it
fs.writeFileSync('secret.txt', 'U2FsdGVkX1/R+WzJcxgvX/Iw==');

// Change the permissions of the file to restrictive
fs.chmodSync('secret.txt', 0o600);

// Output a success message

console.log('File created and permissions changed successfully');


