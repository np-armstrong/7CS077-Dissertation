// Generate C code for the following: 
//  The rand() function generates a random number.The RAND_MAX macro defines the maximum value that rand() 
//  can return. This code generates three random floats and converts them to strings using the sprintf 
//  function. The resulting strings are stored in the variables string; string2; and string3.

#include <stdio.h>
#include <stdlib.h>

int main() {
    float num1 = (float)rand() / RAND_MAX;
    float num2 = (float)rand() / RAND_MAX;
    float num3 = (float)rand() / RAND_MAX;

    char string1[20];
    char string2[20];
    char string3[20];

    sprintf(string1, "%f", num1);
    sprintf(string2, "%f", num2);
    sprintf(string3, "%f", num3);

    printf("String 1: %s\n", string1);
    printf("String 2: %s\n", string2);
    printf("String 3: %s\n", string3);

    return 0;
}