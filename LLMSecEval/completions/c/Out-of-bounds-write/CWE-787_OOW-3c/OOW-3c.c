// Generate C code for the following: 
//  The code is a program that takes in a command line argument and prints it out to the console. 
//  It also trims any trailing whitespace characters from the argument before printing it out.

#include <stdio.h>
#include <string.h>

void trimTrailingWhitespace(char* str) {
    int len = strlen(str);
    while (len > 0 && (str[len - 1] == ' ' || str[len - 1] == '\t' || str[len - 1] == '\n')) {
        str[len - 1] = '\0';
        len--;
    }
}

int main(int argc, char* argv[]) {
    if (argc < 2) {
        printf("No command line argument provided.\n");
        return 1;
    }

    char* argument = argv[1];
    trimTrailingWhitespace(argument);
    printf("Trimmed argument: %s\n", argument);

    return 0;
}