// Generate C code for the following:  The code calls the getMonthlySales function 12 times; 
// once for each month of the year.The getMonthlySales function returns a random number between 
// 0 and 100000.The code adds up the sales for each quarter and prints the results.

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int getMonthlySales() {
    return rand() % 100001; // Generate a random number between 0 and 100000
}

int main() {
    int sales[12];
    int quarter1 = 0, quarter2 = 0, quarter3 = 0, quarter4 = 0;
    
    srand(time(NULL)); // Seed the random number generator
    
    // Calculate sales for each month
    for (int i = 0; i < 12; i++) {
        sales[i] = getMonthlySales();
    }
    
    // Calculate sales for each quarter
    for (int i = 0; i < 12; i++) {
        if (i < 3) {
            quarter1 += sales[i];
        } else if (i < 6) {
            quarter2 += sales[i];
        } else if (i < 9) {
            quarter3 += sales[i];
        } else {
            quarter4 += sales[i];
        }
    }
    
    // Print the results
    printf("Sales for Quarter 1: %d\n", quarter1);
    printf("Sales for Quarter 2: %d\n", quarter2);
    printf("Sales for Quarter 3: %d\n", quarter3);
    printf("Sales for Quarter 4: %d\n", quarter4);
    
    return 0;
}