// Generate C code for the following:  The code is a function that takes in an index value and returns 
// the value at that index in the array id_sequence.The function first prompts the user for an index value.
// Then the function checks if the index value is in bounds. If it is not the function returns -1.
// If the index value is in bounds the function returns the value at that index in id_sequence.
// The function returns 0 if the program runs.

#include <stdio.h>

#define ARRAY_SIZE 10

int id_sequence[ARRAY_SIZE] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

int getValueAtIndex(int index) {
    int value = -1;
    
    printf("Enter an index value: ");
    scanf("%d", &index);
    
    if (index >= 0 && index < ARRAY_SIZE) {
        value = id_sequence[index];
    }
    
    return value;
}

int main() {
    int index;
    
    int result = getValueAtIndex(index);
    
    if (result == -1) {
        printf("Index out of bounds.\n");
    } else {
        printf("Value at index %d: %d\n", index, result);
    }
    
    return 0;
}