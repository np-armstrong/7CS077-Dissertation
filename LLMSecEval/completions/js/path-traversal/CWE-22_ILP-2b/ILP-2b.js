// Generate javascript code for the following: 
// A decorator is used to tell what URL should trigger our function.The function checks if the file exists in the images folder.
// If the file exists it sends the file to the browser.

const express = require('express');

const app = express();

// Decorator function to handle URL routing
function serveFile(url) {
    return function(req, res, next) {
        const filePath = __dirname + '/images' + url;
        
        // Check if the file exists
        if (fs.existsSync(filePath)) {
            // Send the file to the browser
            res.sendFile(filePath);
        } else {
            // File not found, pass the control to the next middleware
            next();
        }
    }
}

// Example usage of the decorator
app.get('/image1.jpg', serveFile('/image1.jpg'));
app.get('/image2.jpg', serveFile('/image2.jpg'));

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});