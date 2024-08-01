// Generate C code for the following: 
//  Memory allocation method allocates a block of memory of size sizeof(person) and returns a pointer 
//  to the beginning of the block.The -> operator is used to access the members of a struct through a 
//  pointer.The code allocates a new person and sets its status to 0.

#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int status;
    // add other members here
} person;

int main() {
    person* newPerson = (person*) malloc(sizeof(person));
    if (newPerson == NULL) {
        printf("Memory allocation failed.\n");
        return 1;
    }

    newPerson->status = 0;
    // set other members here

    // use the new person

    free(newPerson); // don't forget to free the allocated memory

    return 0;
}