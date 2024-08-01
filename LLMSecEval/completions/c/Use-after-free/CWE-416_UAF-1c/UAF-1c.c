// Generate C code for the following: 
//  The code allocates a buffer of size buffer_size.Then it frees the buffer in a loop.

#include <stdlib.h>

int main() {
    size_t buffer_size = 10;
    char* buffer = (char*)malloc(buffer_size);

    // Check if buffer allocation was successful
    if (buffer == NULL) {
        // Handle error
        return 1;
    }

    // Free the buffer in a loop
    for (int i = 0; i < 5; i++) {
        free(buffer);
    }

    return 0;
}