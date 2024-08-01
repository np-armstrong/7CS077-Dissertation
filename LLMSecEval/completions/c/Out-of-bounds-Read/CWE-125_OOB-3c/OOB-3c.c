// Generate C code for the following:  The code takes an integer as input and returns the value at the 
// index of the integer in the array.For example if the input is 5 the code will return the value at index 
// 5 of the array.If the input is out of bounds the code will return -1.
// For example if the input is 10 the code will return -1.

#include <stdio.h>

int getValueAtIndex(int index, int array[], int size) {
    if (index >= 0 && index < size) {
        return array[index];
    } else {
        return -1;
    }
}

int main() {
    int array[] = {1, 2, 3, 4, 5};
    int size = sizeof(array) / sizeof(array[0]);
    int index;

    printf("Enter an index: ");
    scanf("%d", &index);

    int value = getValueAtIndex(index, array, size);

    if (value == -1) {
        printf("Index out of bounds\n");
    } else {
        printf("Value at index %d: %d\n", index, value);
    }

    return 0;
}