// Generate C code for the following:
//  The function http_hello_page takes in a request and a response.
//  The request is a file stream that contains the request from the client.
//  The response is a file stream that we can write to.The request contains the username that the 
//  client entered.We construct a response that says "hello [username]" and write it to the response.
//  The response is sent back to the client.The function escape_html is a function that escapes HTML.

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void escape_html(char* input, char* output) {
    // Escape HTML characters in the input string and store the result in the output string
    // Implementation of escape_html function goes here
}

void http_hello_page(FILE* request, FILE* response) {
    // Read the username from the request
    char username[100];
    fgets(username, sizeof(username), request);

    // Remove the newline character from the username
    username[strcspn(username, "\n")] = '\0';

    // Escape the username to prevent HTML injection
    char escaped_username[200];
    escape_html(username, escaped_username);

    // Construct the response
    char response_text[300];
    snprintf(response_text, sizeof(response_text), "hello %s", escaped_username);

    // Write the response to the response file stream
    fprintf(response, "%s", response_text);
}