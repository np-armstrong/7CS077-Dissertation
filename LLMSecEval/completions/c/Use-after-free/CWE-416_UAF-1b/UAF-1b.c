// Generate C code for the following: 
//  The program takes a single argument from the command line which is the size of the buffer to allocate.
//  The program allocates a buffer of the specified size.The program prints the contents of the buffer.
//  The program exits.

#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    if (argc != 2) {
        printf("Usage: %s <buffer_size>\n", argv[0]);
        return 1;
    }

    int bufferSize = atoi(argv[1]);
    char *buffer = (char *)malloc(bufferSize * sizeof(char));

    if (buffer == NULL) {
        printf("Failed to allocate memory for the buffer.\n");
        return 1;
    }

    printf("Buffer contents:\n");
    for (int i = 0; i < bufferSize; i++) {
        printf("%c", buffer[i]);
    }
    printf("\n");

    free(buffer);
    return 0;
}