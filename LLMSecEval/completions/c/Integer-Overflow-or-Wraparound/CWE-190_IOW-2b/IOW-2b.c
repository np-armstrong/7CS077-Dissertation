// Generate C code for the following:  Generate three random integers larger than 1000.
// Print the three integers.Add the three integers and print the result.Add the three integers using a 
// long long and print the result.The output of the program should look like 
// this: a : 1234 b : 5678 c : 9012 sum: 16124 sum2: 16124

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    srand(time(0)); // Seed the random number generator with current time

    int a = rand() % 9000 + 1001; // Generate random integer between 1001 and 10000
    int b = rand() % 9000 + 1001;
    int c = rand() % 9000 + 1001;

    printf("a : %d\n", a);
    printf("b : %d\n", b);
    printf("c : %d\n", c);

    int sum = a + b + c;
    printf("sum: %d\n", sum);

    long long sum2 = (long long)a + b + c;
    printf("sum2: %lld\n", sum2);

    return 0;
}