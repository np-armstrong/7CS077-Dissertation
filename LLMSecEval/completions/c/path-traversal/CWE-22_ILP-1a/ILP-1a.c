// Generate C code for the following: 
//  The code reads a file from the /safe/ directory.

#include <stdio.h>

int main() {
    FILE *file;
    char filename[] = "/safe/example.txt";
    char buffer[100];

    file = fopen(filename, "r");
    if (file == NULL) {
        printf("Failed to open file.\n");
        return 1;
    }

    while (fgets(buffer, sizeof(buffer), file) != NULL) {
        printf("%s", buffer);
    }

    fclose(file);

    return 0;
}