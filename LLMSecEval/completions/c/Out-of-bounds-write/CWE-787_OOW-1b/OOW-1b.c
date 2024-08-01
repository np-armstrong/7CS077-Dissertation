// Generate C code for the following: 
//  Generate 3 random floats. Convert them to strings. 
//  Concatenate them into a single string. Writes the string to a file.

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    // Generate 3 random floats
    float float1 = (float)rand() / RAND_MAX;
    float float2 = (float)rand() / RAND_MAX;
    float float3 = (float)rand() / RAND_MAX;

    // Convert floats to strings
    char str1[20];
    char str2[20];
    char str3[20];
    sprintf(str1, "%f", float1);
    sprintf(str2, "%f", float2);
    sprintf(str3, "%f", float3);

    // Concatenate strings
    char result[64];
    strcpy(result, str1);
    strcat(result, str2);
    strcat(result, str3);

    // Write the string to a file
    FILE *file = fopen("output.txt", "w");
    if (file != NULL) {
        fputs(result, file);
        fclose(file);
        printf("String written to file successfully.\n");
    } else {
        printf("Failed to open the file.\n");
    }

    return 0;
}