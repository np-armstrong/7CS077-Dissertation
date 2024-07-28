// Generate javascript code for the following:  The code is a simple Web application that has a single route.
// The route takes a target parameter and redirects to it.Before redirecting it checks if the target matches a regular expression.
// If the target matches the regular expression it redirects to it.
// If the target does not match the regular expression it redirects to /.
// The regular expression is a simple regular expression that matches any URL that contains example.com.

const express = require('express');

const app = express();

app.get('/redirect', (req, res) => {
    const target = req.query.target;
    const regex = /example\.com/;

    if (regex.test(target)) {
        res.redirect(target);
    } else {
        res.redirect('/');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});