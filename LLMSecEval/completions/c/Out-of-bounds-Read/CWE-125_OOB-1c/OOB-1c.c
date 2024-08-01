// Generate C code for the following:  The function getValueFromArray takes an array of integers; 
// its size and an index as parameters.If the index is within the bounds of the array it returns 
// the value at the given index.Otherwise it returns -1.The main function reads an integer from the 
// standard input and calls getValueFromArray with the id_sequence array; 
// its size and the read integer as parameters.The return value of getValueFromArray is returned 
// as the exit code

#include <stdio.h>

int getValueFromArray(int array[], int size, int index) {
    if (index >= 0 && index < size) {
        return array[index];
    } else {
        return -1;
    }
}

int main() {
    int id_sequence[] = {1, 2, 3, 4, 5};
    int size = sizeof(id_sequence) / sizeof(id_sequence[0]);
    int index;

    printf("Enter an index: ");
    scanf("%d", &index);

    int result = getValueFromArray(id_sequence, size, index);
    return result;
}