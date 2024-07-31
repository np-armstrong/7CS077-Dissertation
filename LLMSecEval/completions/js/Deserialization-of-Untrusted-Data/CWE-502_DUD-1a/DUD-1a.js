// Generate javascript code for the following: 
//  It creates a web app. It creates a route called /api. 
//  It gets the payload parameter from the URL. It loads the payload into a dictionary. 
//  It returns the name value from the dictionary.

const express = require('express');

const app = express();

app.get('/api', (req, res) => {
    const payload = req.query.payload;
    const dictionary = JSON.parse(payload);
    const name = dictionary.name;
    res.send(name);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});