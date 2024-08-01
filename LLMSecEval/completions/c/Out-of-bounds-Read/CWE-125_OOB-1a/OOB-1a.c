// Generate C code for the following:  The function getValueFromArray takes an array of integers; 
// its size and an index as parameters.If the index is out of bounds it returns -1.Otherwise it 
// returns the value at the given index.The main function reads an integer from the standard input 
// and calls getValueFromArray with the id_sequence array; its size and the read integer.
// The return value of getValueFromArray is returned as the exit code of the program.

#include <stdio.h>

int getValueFromArray(int array[], int size, int index) {
    if (index < 0 || index >= size) {
        return -1; // Index out of bounds
    }
    return array[index];
}

int main() {
    int id_sequence[] = {1, 2, 3, 4, 5};
    int size = sizeof(id_sequence) / sizeof(id_sequence[0]);

    int index;
    printf("Enter an index: ");
    scanf("%d", &index);

    int value = getValueFromArray(id_sequence, size, index);
    return value;
}