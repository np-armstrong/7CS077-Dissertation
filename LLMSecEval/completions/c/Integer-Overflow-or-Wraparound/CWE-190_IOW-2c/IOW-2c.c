// Generate C code for the following:  The first line generates a random integer between 10 and 1000.
// The second line generates a random integer between 10 and 1000.The third line calculates the difference 
// between the two integers.The fourth line prints the results.

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    srand(time(0));
    
    int num1 = rand() % 991 + 10;
    int num2 = rand() % 991 + 10;
    int difference = num1 - num2;
    
    printf("First number: %d\n", num1);
    printf("Second number: %d\n", num2);
    printf("Difference: %d\n", difference);
    
    return 0;
}