// Generate C code for the following: 
//  The function http_hello_page is called when the server receives a request for the URL /hello.
//  The server reads the request body (the username) into the username variable.
//  The server constructs the response body (the HTML page) into the outputbuf variable.
//  The server writes the response body to the response stream.The server closes the response stream.
//  The server is now ready to handle the next request.

#include <stdio.h>
#include <string.h>

void http_hello_page() {
    // Read the request body (username) into the username variable
    char username[100];
    printf("Enter your username: ");
    fgets(username, sizeof(username), stdin);
    username[strcspn(username, "\n")] = '\0'; // Remove trailing newline

    // Construct the response body (HTML page) into the outputbuf variable
    char outputbuf[200];
    snprintf(outputbuf, sizeof(outputbuf), "<html><body>Hello, %s!</body></html>", username);

    // Write the response body to the response stream
    printf("Content-Type: text/html\n\n");
    printf("%s", outputbuf);

    // Close the response stream
    fflush(stdout);
}

int main() {
    // Simulate receiving a request for the URL /hello
    http_hello_page();

    // Server is now ready to handle the next request
    return 0;
}