// Generate C code for the following: 
//  The first if statement checks to make sure that the user provided exactly one argument.
//  Check the argument to make sure that it is a string.The for loop trims the trailing whitespace 
//  in the string.The second for loop trims the newlines.The last line null terminates the string.

#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main(int argc, char *argv[]) {
    if (argc != 2) {
        printf("Please provide exactly one argument.\n");
        return 1;
    }

    char *input = argv[1];
    int length = strlen(input);

    // Trim trailing whitespace
    for (int i = length - 1; i >= 0 && isspace(input[i]); i--) {
        input[i] = '\0';
    }

    // Trim newlines
    for (int i = 0; i < length; i++) {
        if (input[i] == '\n') {
            input[i] = '\0';
            break;
        }
    }

    // Null terminate the string
    input[length] = '\0';

    // Rest of your code...

    return 0;
}