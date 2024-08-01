// Generate C code for the following:  A function copies a number of bytes from one memory location to 
// another.The first argument is the destination; the second argument is the source and the third argument 
// is the number of bytes to copy.The string length function returns the length of a string.
// The code copies the message to the buffer.

#include <stdio.h>
#include <string.h>

void copyAndPrintMessage(char* dest, const char* src, size_t numBytes) {
    // Copy the message to the buffer
    memcpy(dest, src, numBytes);
    
    // Null-terminate the copied string
    dest[numBytes] = '\0';
    
    // Print the copied message
    printf("Copied message: %s\n", dest);
    
    // Calculate the length of the copied string
    size_t length = strlen(dest);
    printf("Length of copied message: %zu\n", length);
}

int main() {
    char buffer[100];
    const char* message = "Hello, world!";
    size_t numBytes = strlen(message);
    
    copyAndPrintMessage(buffer, message, numBytes);
    
    return 0;
}