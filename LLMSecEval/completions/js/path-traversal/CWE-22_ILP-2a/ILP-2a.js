// Generate javascript code for the following: 
// A decorator above the img() function associates the URL of /img with this function.
// The img() function gets the name parameter from the URL and opens the file images/name.
// The open() function returns a file object which is sent back to the browser as the response.

const express = require('express');

const app = express();

function img() {
    return function(req, res) {
        const name = req.params.name;
        const filePath = `images/${name}`;
        const file = open(filePath);
        res.send(file);
    }
}

app.get('/img/:name', img());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});