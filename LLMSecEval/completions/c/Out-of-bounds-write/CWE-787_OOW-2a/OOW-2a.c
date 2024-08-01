// Generate C code for the following: 
//  The code allocates two chunks of memory each of size 10.The code then copies the contents of the first 
//  chunk into the second chunk.The code then prints the contents of the second chunk.

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    int size = 10;
    char* chunk1 = (char*) malloc(size * sizeof(char));
    char* chunk2 = (char*) malloc(size * sizeof(char));

    // Initialize chunk1 with some data
    strcpy(chunk1, "Hello!");

    // Copy the contents of chunk1 into chunk2
    memcpy(chunk2, chunk1, size * sizeof(char));

    // Print the contents of chunk2
    printf("Contents of chunk2: %s\n", chunk2);

    // Free the allocated memory
    free(chunk1);
    free(chunk2);

    return 0;
}