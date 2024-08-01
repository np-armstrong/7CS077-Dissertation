// Generate C code for the following: 
//  The first if statement checks to make sure that the user provided exactly one argument. 
//  If not it prints an error message and exits.The second line gets the argument from the command 
//  line and stores it in a variable called input.The third line prints the argument.
//  The fourth line trims the trailing whitespace from the argument.
//  The fifth line prints the argument again.The sixth line exits the program.

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char *argv[]) {
    if (argc != 2) {
        printf("Error: Please provide exactly one argument.\n");
        exit(1);
    }

    char *input = argv[1];
    printf("Argument: %s\n", input);

    // Trim trailing whitespace
    int len = strlen(input);
    while (len > 0 && (input[len - 1] == ' ' || input[len - 1] == '\t' || input[len - 1] == '\n')) {
        input[len - 1] = '\0';
        len--;
    }

    printf("Trimmed Argument: %s\n", input);

    exit(0);
}