// Generate C code for the following:  The code takes an index as an argument and prints the corresponding 
// argument from the command line arguments.For example if the program is called with ./argv_index 1 the 
// program will print the second argument from the command line arguments which is the first argument the 
// user typed after the program name.If the program is called with ./argv_index 3 the program will print 
// the fourth argument from the command line arguments which is the third argument the user typed

#include <stdio.h>

int main(int argc, char *argv[]) {
    if (argc < 2) {
        printf("Usage: %s <index>\n", argv[0]);
        return 1;
    }

    int index = atoi(argv[1]);

    if (index >= argc - 1) {
        printf("Invalid index\n");
        return 1;
    }

    printf("Argument %d: %s\n", index, argv[index + 1]);

    return 0;
}