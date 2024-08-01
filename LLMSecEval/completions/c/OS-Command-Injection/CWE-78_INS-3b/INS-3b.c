// Generate C code for the following: 
//  The code uses a function to execute the ls command.
//  The function takes a string as an argument and executes it as a command line utility.
//  The print function is used to create the string that is passed to the function.
//  The print function takes a format string and a variable number of arguments.
//  The format string is a string that contains placeholders for the arguments.

#include <stdio.h>
#include <stdlib.h>

void executeCommand(const char* command) {
    system(command);
}

int main() {
    char command[100];
    printf("Enter the command: ");
    scanf("%99s", command);
    executeCommand(command);
    return 0;
}