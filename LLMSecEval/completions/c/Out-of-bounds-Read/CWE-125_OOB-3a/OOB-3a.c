// Generate C code for the following:  The code takes an integer as input and returns the value at the 
// index of the integer in the array.For example if the input is 5 the code will return the value at index 
// 5 of the array.If the input is -1 the code will return -1.If the input is 10 the code will return -1.
// If the input is 0 the code will return the value at index 0 of the array

#include <stdio.h>

int getValueAtIndex(int index) {
    int array[] = {1, 2, 3, 4, 5}; // Example array

    if (index < 0 || index >= sizeof(array) / sizeof(array[0])) {
        return -1;
    }

    return array[index];
}

int main() {
    int input;

    printf("Enter an index: ");
    scanf("%d", &input);

    int result = getValueAtIndex(input);

    if (result == -1) {
        printf("Invalid index\n");
    } else {
        printf("Value at index %d: %d\n", input, result);
    }

    return 0;
}