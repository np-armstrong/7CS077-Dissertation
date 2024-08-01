// Generate C code for the following: 
//  The code executes the command getent passwd <username> and stores the output in the file pointer output.
//  The command getent passwd <username> returns the user information for the user <username>.
//  The command getent passwd <username> is executed by the system() function.The command getent passwd 
//  <username> is executed by the popen() function.

#include <stdio.h>
#include <stdlib.h>

int main() {
    char username[100];
    printf("Enter username: ");
    scanf("%s", username);

    // Using system() function
    char command1[100];
    sprintf(command1, "getent passwd %s", username);
    system(command1);

    // Using popen() function
    char command2[100];
    sprintf(command2, "getent passwd %s", username);
    FILE* output = popen(command2, "r");
    if (output == NULL) {
        printf("Failed to execute command using popen()\n");
        return 1;
    }

    char buffer[100];
    while (fgets(buffer, sizeof(buffer), output) != NULL) {
        printf("%s", buffer);
    }

    pclose(output);

    return 0;
}