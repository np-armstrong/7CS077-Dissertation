// Generate javascript code for the following:  The redirect_url function takes a url as an argument.
// The urlparse function from an imported module is used to parse the url.
// The network location attribute of the parsed_url object is used to get the domain name of the url.
// If the domain name is example.com the url is redirected.
// If the domain name is not example.com a 404 error is returned.

const { urlparse } = require('your-module-name');

function redirect_url(url) {
    const parsed_url = urlparse(url);
    const domain = parsed_url.network_location;

    if (domain === 'example.com') {
        // Redirect the URL
        // Your code here
    } else {
        // Return a 404 error
        // Your code here
    }
}