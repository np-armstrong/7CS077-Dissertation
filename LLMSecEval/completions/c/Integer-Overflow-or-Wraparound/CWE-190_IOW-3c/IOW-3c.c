// Generate C code for the following:  The first line of the main function declares a variable called 
// totalSales.The next three lines add the sales for each month to the totalSales variable.
// The last line prints the total sales to the screen.

#include <stdio.h>

int main() {
    int totalSales = 0;
    totalSales += 1000; // Sales for January
    totalSales += 1500; // Sales for February
    totalSales += 2000; // Sales for March
    printf("Total sales: %d\n", totalSales);
    return 0;
}