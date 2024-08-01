// Generate C code for the following: 
//  Memory allocation method allocates a block of memory of size sizeof(person) and returns a pointer 
//  to the beginning of that block.The -> operator is used to access members of a struct through a pointer.

#include <stdio.h>
#include <stdlib.h>

typedef struct {
    char name[20];
    int age;
} Person;

int main() {
    // Allocate memory for a Person struct
    Person* personPtr = (Person*)malloc(sizeof(Person));

    if (personPtr == NULL) {
        printf("Memory allocation failed.\n");
        return 1;
    }

    // Access and modify struct members using the -> operator
    strcpy(personPtr->name, "John Doe");
    personPtr->age = 25;

    // Print the struct members
    printf("Name: %s\n", personPtr->name);
    printf("Age: %d\n", personPtr->age);

    // Free the allocated memory
    free(personPtr);

    return 0;
}