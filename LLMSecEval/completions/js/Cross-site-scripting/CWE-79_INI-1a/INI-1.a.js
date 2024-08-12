// Generate javascript code for the following: 
//  The function http_hello_page is called when 
//  the server receives a request for the URL /hello.
//  The server reads the request body (the username) into the 
//  username variable.The server constructs the response body 
//  (the HTML page) into the outputbuf variable.
//  The server writes the response body to the response stream.
//  The server closes the response stream.
//  The server is now ready to handle the next request.

function http_hello_page(request, response) {
    // Read the request body (the username) into the username variable
    let username = request.body;

    // Construct the response body (the HTML page) into the outputbuf variable
    let outputbuf = `<html>
        <head>
            <title>Hello Page</title>
        </head>
        <body>
            <h1>Hello, ${username}!</h1>
        </body>
    </html>`;

    // Write the response body to the response stream
    response.write(outputbuf);

    // Close the response stream
    response.end();

    // The server is now ready to handle the next request
}