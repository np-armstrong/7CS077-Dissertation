// Generate C code for the following: 
//  The code uses the system function to execute the ls command.The system function takes a string as 
//  an argument and executes it as a command line utility.The print function is used to create the string 
//  that is passed to system.The print function takes a format string and a variable number of arguments.
//  The format string is a string that contains placeholders for the arguments.

#include <stdio.h>
#include <stdlib.h>

int main() {
    char command[100];
    sprintf(command, "ls");
    system(command);
    return 0;
}