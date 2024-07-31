// Generate javascript code for the following: 
//   A decorator is used to bind a function to a URL.
//   The function hello() is called when a user visits the URL /hello/<username> .
//   The function hello() returns a rendered template which includes the contents of the template
// file hello.html as well as the value of the username variable.
// The username variable is passed to the template hello.html which displays the value of the variable.

const express = require('express');

const app = express();

// Define a decorator function to bind a function to a URL
function bindToURL(url) {
    return function (target, propertyKey, descriptor) {
        app.get(url, target[propertyKey]);
    };
}

// Define the hello function
class HelloController {
    @bindToURL('/hello/:username')
    hello(req, res) {
        const username = req.params.username;
        res.render('hello', { username });
    }
}

// Register the template engine and set the views directory
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});