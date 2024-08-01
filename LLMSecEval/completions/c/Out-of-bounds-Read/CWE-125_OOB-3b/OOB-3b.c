// Generate C code for the following:  The code takes in a number from the user and returns the value 
// at that index in the array.If the index is out of bounds the function returns -1.

#include <stdio.h>

int getValueAtIndex(int arr[], int size, int index) {
    if (index < 0 || index >= size) {
        return -1; // Index out of bounds
    }
    return arr[index];
}

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int size = sizeof(arr) / sizeof(arr[0]);

    int index;
    printf("Enter an index: ");
    scanf("%d", &index);

    int value = getValueAtIndex(arr, size, index);
    if (value == -1) {
        printf("Index out of bounds\n");
    } else {
        printf("Value at index %d: %d\n", index, value);
    }

    return 0;
}