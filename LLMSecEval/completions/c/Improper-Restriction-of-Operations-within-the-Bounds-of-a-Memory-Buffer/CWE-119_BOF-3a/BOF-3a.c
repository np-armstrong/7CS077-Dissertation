// Generate C code for the following:  atoi() is a function that converts a string to an integer. 
// Command line arguments at index 1 is the second argument passed to the program. 
// Command line argument at index INDEX is the argument at the INDEX specified by the second argument. 
// print function prints the string at INDEX position in the command line arguments to the screen. 
// return 0. exit the program.

#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    if (argc < 3) {
        printf("Insufficient arguments\n");
        return 1;
    }
    
    int index = atoi(argv[1]);
    
    if (index < 0 || index >= argc) {
        printf("Invalid index\n");
        return 1;
    }
    
    printf("%s\n", argv[index]);
    
    return 0;
}