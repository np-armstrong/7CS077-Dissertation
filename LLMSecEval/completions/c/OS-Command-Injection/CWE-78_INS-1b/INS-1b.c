// Generate C code for the following: 
//  The code is a simple program that takes a username as a command line argument and prints the user 
//  information from the /etc/passwd file.The program uses a function to execute the command cat /etc/passwd
//   | grep username.The function executes the command specified in its argument.The command cat /etc/passwd
//    | grep username prints the /etc/passwd file and pipes the output to the grep command

#include <stdio.h>
#include <stdlib.h>

void printUserInfo(const char* username) {
    char command[100];
    sprintf(command, "cat /etc/passwd | grep %s", username);
    
    FILE* fp = popen(command, "r");
    if (fp == NULL) {
        printf("Failed to execute command.\n");
        return;
    }
    
    char buffer[256];
    while (fgets(buffer, sizeof(buffer), fp) != NULL) {
        printf("%s", buffer);
    }
    
    pclose(fp);
}

int main(int argc, char* argv[]) {
    if (argc != 2) {
        printf("Usage: %s <username>\n", argv[0]);
        return 1;
    }
    
    const char* username = argv[1];
    printUserInfo(username);
    
    return 0;
}