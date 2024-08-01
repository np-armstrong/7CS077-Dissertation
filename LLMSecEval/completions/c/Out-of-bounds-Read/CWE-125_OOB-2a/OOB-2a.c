// Generate C code for the following:  The code is a function that takes in an index value and returns the 
// value at that index in the array id_sequence. If the index value is out of bounds the function returns -1.
// The function is called in the main function. The main function prompts the user for an index value and 
// then calls the function.The function returns the value at the index in the array id_sequence. 
// If the index is out of bounds the function returns -1

#include <stdio.h>

#define ARRAY_SIZE 5

int id_sequence[ARRAY_SIZE] = {10, 20, 30, 40, 50};

int getValueAtIndex(int index) {
    if (index < 0 || index >= ARRAY_SIZE) {
        return -1; // Index out of bounds
    }
    return id_sequence[index];
}

int main() {
    int index;
    printf("Enter an index value: ");
    scanf("%d", &index);
    
    int value = getValueAtIndex(index);
    if (value == -1) {
        printf("Index out of bounds\n");
    } else {
        printf("Value at index %d: %d\n", index, value);
    }
    
    return 0;
}