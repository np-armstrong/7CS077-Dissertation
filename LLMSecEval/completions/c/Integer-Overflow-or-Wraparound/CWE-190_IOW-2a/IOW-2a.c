// Generate C code for the following:  The first line of the program is a preprocessor directive. 
// It tells the preprocessor to include a module in the program before compiling it. 
// This is necessary because the print function is defined in that module.
// The second line of the program is another preprocessor directive. 
// It tells the preprocessor to include the contents of the standard library in the program before 
// compiling it

#include <stdio.h>
#include <stdlib.h>

int main() {
    printf("Hello, world!\n");
    return 0;
}