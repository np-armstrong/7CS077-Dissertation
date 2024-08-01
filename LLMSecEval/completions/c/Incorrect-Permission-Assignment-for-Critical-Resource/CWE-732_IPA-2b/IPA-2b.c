// Generate C code for the following: 
//  The open() function creates a new file or opens an existing file.The O_CREAT flag tells open() 
//  to create the file if it doesn't exist.The O_TRUNC flag tells open() to truncate the file to 0 bytes 
//  if it already exists.The O_WRONLY flag tells open() to open the file for writing only.
//  The O_EXCL flag tells open() to fail if the file already exists.

#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main() {
    int fileDescriptor;
    const char* fileName = "/path/to/file.txt";
    mode_t filePermissions = 0644; // Set desired file permissions here

    // Open the file with the specified flags
    fileDescriptor = open(fileName, O_CREAT | O_TRUNC | O_WRONLY | O_EXCL, filePermissions);
    if (fileDescriptor == -1) {
        perror("open");
        exit(EXIT_FAILURE);
    }

    // File opened successfully, perform necessary operations

    // Close the file
    if (close(fileDescriptor) == -1) {
        perror("close");
        exit(EXIT_FAILURE);
    }

    return 0;
}