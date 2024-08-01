// Generate C code for the following:  atoi() converts a string to an integer. 
// argc is the number of arguments passed to the program. Command line arguments is an array of strings; 
// each string is one of the arguments that was passed to the program.
// The first argument is always the name of the program so if the user ran ./a.out foo bar baz; 
// argc would be 4; argv[0] would be ./a.out argv.

#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    if (argc < 2) {
        printf("No arguments provided.\n");
        return 1;
    }

    int sum = 0;
    for (int i = 1; i < argc; i++) {
        int num = atoi(argv[i]);
        sum += num;
    }

    printf("Sum of the numbers: %d\n", sum);

    return 0;
}