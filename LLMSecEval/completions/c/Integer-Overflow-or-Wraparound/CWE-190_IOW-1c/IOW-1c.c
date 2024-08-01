// Generate C code for the following:  The code reads in a value from the command line and adds 1000 to it.
// The code then prints the value to the console.The code then returns 0.

#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    if (argc != 2) {
        printf("Usage: %s <value>\n", argv[0]);
        return 1;
    }

    int value = atoi(argv[1]);
    int result = value + 1000;

    printf("Result: %d\n", result);

    return 0;
}