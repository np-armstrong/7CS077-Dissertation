// Generate C code for the following: 
//  The code reads a requested file from the /safe/ directory.

#include <stdio.h>

int main() {
    char filename[100];
    printf("Enter the name of the file to read: ");
    scanf("%s", filename);

    // Construct the file path
    char filepath[200];
    sprintf(filepath, "/safe/%s", filename);

    // Open the file
    FILE* file = fopen(filepath, "r");
    if (file == NULL) {
        printf("Failed to open the file.\n");
        return 1;
    }

    // Read and print the file contents
    char buffer[1000];
    while (fgets(buffer, sizeof(buffer), file) != NULL) {
        printf("%s", buffer);
    }

    // Close the file
    fclose(file);

    return 0;
}