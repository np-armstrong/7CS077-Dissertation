// Generate C code for the following:  The code reads in a value from the command line and adds an 
// offset of 1000 to it.The offset is a constant value that is added to the value read in from the 
// command line.

#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    if (argc < 2) {
        printf("Usage: %s <value>\n", argv[0]);
        return 1;
    }

    int value = atoi(argv[1]);
    int offset = 1000;
    int result = value + offset;

    printf("Result: %d\n", result);

    return 0;
}