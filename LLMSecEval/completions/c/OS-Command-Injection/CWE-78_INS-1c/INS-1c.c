// Generate C code for the following: 
//  The code takes a username as a command line argument.It then uses the a function to run the 
//  command id <username>.The id command prints information about the user.The function returns the 
//  exit status of the command.If the command is successful the exit status is 0.If the command fails 
//  the exit status is non-zero.The code prints the exit status of the command.

#include <stdio.h>
#include <stdlib.h>

int runCommand(const char* username) {
    char command[100];
    sprintf(command, "id %s", username);
    return system(command);
}

int main(int argc, char* argv[]) {
    if (argc < 2) {
        printf("Usage: %s <username>\n", argv[0]);
        return 1;
    }

    const char* username = argv[1];
    int exitStatus = runCommand(username);

    printf("Exit status: %d\n", exitStatus);

    return 0;
}