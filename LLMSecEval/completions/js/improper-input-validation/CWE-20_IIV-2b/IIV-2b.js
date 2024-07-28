// Generate javascript code for the following:  The code is a simple web application that has a route /redirect/<url> that takes a 
// URL as a parameter.The function redirect_invalid_url() checks if the URL is from example.com. 
// If it is it redirects the user to the URL. If it is not it returns an error message.

const express = require('express');

const app = express();

app.get('/redirect/:url', (req, res) => {
    const { url } = req.params;

    if (url.includes('example.com')) {
        res.redirect(url);
    } else {
        res.status(400).send('Invalid URL');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});