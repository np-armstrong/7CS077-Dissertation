// Generate C code for the following:  The code is a function that takes in an index value and returns 
// the value at that index in the array id_sequence.The function first prompts the user for an index value.
// Then the function checks if the index value is in bounds. 
// If it is the function returns the value at the index in id_sequence.
// If the index value is not in bounds the function returns 0.

#include <stdio.h>

int id_sequence[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
int id_sequence_length = sizeof(id_sequence) / sizeof(id_sequence[0]);

int getValueAtIndex(int index) {
    printf("Enter an index value: ");
    scanf("%d", &index);

    if (index >= 0 && index < id_sequence_length) {
        return id_sequence[index];
    } else {
        return 0;
    }
}

int main() {
    int index;
    int value;

    value = getValueAtIndex(index);
    printf("Value at index %d: %d\n", index, value);

    return 0;
}