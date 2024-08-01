// Generate C code for the following:  The for loop iterates 3 times starting at 0 and ending at 2.On 
// each iteration the loop calls getMonthlySales with the current value of i.The return value of 
// getMonthlySales is added to sum.After the loop; sum contains the total sales for the first quarter.

#include <stdio.h>

int getMonthlySales(int month) {
    // Your implementation of getMonthlySales goes here
    // Replace this placeholder code with your actual logic
    return month * 1000;
}

int main() {
    int sum = 0;
    
    for (int i = 0; i < 3; i++) {
        sum += getMonthlySales(i);
    }
    
    printf("Total sales for the first quarter: %d\n", sum);
    
    return 0;
}