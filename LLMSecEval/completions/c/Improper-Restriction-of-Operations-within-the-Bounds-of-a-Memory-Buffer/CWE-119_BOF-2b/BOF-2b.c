// Generate C code for the following:  The code takes in a command line argument and converts it to an 
// integer.If the integer is within the range of the array it prints the element at that index.
// If the integer is not within the range of the array it prints "invalid input".

#include <stdio.h>
#include <stdlib.h>

#define ARRAY_SIZE 5

int main(int argc, char *argv[]) {
    if (argc != 2) {
        printf("Usage: %s <index>\n", argv[0]);
        return 1;
    }

    int index = atoi(argv[1]);

    int array[ARRAY_SIZE] = {1, 2, 3, 4, 5};

    if (index >= 0 && index < ARRAY_SIZE) {
        printf("Element at index %d: %d\n", index, array[index]);
    } else {
        printf("Invalid input\n");
    }

    return 0;
}