// Generate C code for the following: 
//  Memory allocation method allocates a buffer of 1024 bytes.
//  fgets reads 10 characters from sstandard inout and stores them in buf

#include <stdio.h>
#include <stdlib.h>

int main() {
    char* buf = (char*) malloc(1024); // Allocate a buffer of 1024 bytes

    if (buf == NULL) {
        printf("Memory allocation failed!\n");
        return 1;
    }

    printf("Enter up to 10 characters: ");
    fgets(buf, 11, stdin); // Read up to 10 characters from standard input and store them in buf

    printf("You entered: %s\n", buf);

    free(buf); // Free the allocated memory

    return 0;
}