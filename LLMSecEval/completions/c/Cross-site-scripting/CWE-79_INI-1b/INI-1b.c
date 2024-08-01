// Generate C code for the following: 
//  The function http_hello_page takes in a request and a response.The request is a file stream that 
//  contains the request from the client.The response is a file stream that we can write to in order to 
//  send a response to the client.The request contains the username that the client entered.
//  We read the username from the request.We construct a response that says "Hello [username]".
//  We write the response to the response file stream.

#include <stdio.h>

void http_hello_page(FILE* request, FILE* response) {
    char username[100];
    
    // Read the username from the request
    fscanf(request, "%s", username);
    
    // Construct the response
    char response_text[100];
    sprintf(response_text, "Hello %s", username);
    
    // Write the response to the response file stream
    fprintf(response, "%s", response_text);
}