// Generate C code for the following: 
//  The code allocates two chunks of memory each of size 10.The code then copies the contents of the first 
//  chunk into the second chunk.The code then prints the contents of the second chunk.
//  The code then frees the memory allocated to the first chunk.The code then prints the contents of the 
//  second chunk.The code then frees the memory allocated to the second chunk.

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    // Allocate two chunks of memory each of size 10
    int* chunk1 = (int*)malloc(10 * sizeof(int));
    int* chunk2 = (int*)malloc(10 * sizeof(int));

    // Copy the contents of the first chunk into the second chunk
    memcpy(chunk2, chunk1, 10 * sizeof(int));

    // Print the contents of the second chunk
    printf("Contents of the second chunk:\n");
    for (int i = 0; i < 10; i++) {
        printf("%d ", chunk2[i]);
    }
    printf("\n");

    // Free the memory allocated to the first chunk
    free(chunk1);

    // Print the contents of the second chunk
    printf("Contents of the second chunk after freeing the first chunk:\n");
    for (int i = 0; i < 10; i++) {
        printf("%d ", chunk2[i]);
    }
    printf("\n");

    // Free the memory allocated to the second chunk
    free(chunk2);

    return 0;
}