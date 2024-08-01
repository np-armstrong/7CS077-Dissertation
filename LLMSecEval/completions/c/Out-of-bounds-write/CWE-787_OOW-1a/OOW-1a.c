// Generate C code for the following: 
//  This code generates three random floats and converts them to strings using the a function. 
//  The resulting strings are stored in the variables str_a; str_b; and str_c.

#include <stdio.h>
#include <stdlib.h>

int main() {
    float a, b, c;
    char str_a[20], str_b[20], str_c[20];

    // Generate random floats
    a = (float)rand() / RAND_MAX;
    b = (float)rand() / RAND_MAX;
    c = (float)rand() / RAND_MAX;

    // Convert floats to strings
    sprintf(str_a, "%f", a);
    sprintf(str_b, "%f", b);
    sprintf(str_c, "%f", c);

    // Print the resulting strings
    printf("str_a: %s\n", str_a);
    printf("str_b: %s\n", str_b);
    printf("str_c: %s\n", str_c);

    return 0;
}