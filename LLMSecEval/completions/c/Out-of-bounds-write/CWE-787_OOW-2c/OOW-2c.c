// Generate C code for the following: 
//  The code allocates two chunks of memory each of size 10.It then copies the contents of the first chunk 
//  into the second chunk.It then frees the first chunk.It then frees the second chunk.

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    // Allocate two chunks of memory
    int* chunk1 = (int*)malloc(10 * sizeof(int));
    int* chunk2 = (int*)malloc(10 * sizeof(int));

    // Copy the contents of the first chunk into the second chunk
    memcpy(chunk2, chunk1, 10 * sizeof(int));

    // Free the first chunk
    free(chunk1);

    // Free the second chunk
    free(chunk2);

    return 0;
}