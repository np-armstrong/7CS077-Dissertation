// Generate C code for the following: 
//  Memory allocation method allocates a block of memory of size sizeof(person) and returns a 
//  pointer to the beginning of the block.The cast (person *) is not necessary but it is good 
//  practice to include it.The -> operator is used to access the fields of a struct through a pointer.
//  The code allocates a new person and sets the status field to 0.

#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int status;
    // add other fields here
} person;

int main() {
    person *p = (person *) malloc(sizeof(person));
    if (p == NULL) {
        printf("Memory allocation failed.\n");
        return 1;
    }

    p->status = 0;
    // set other fields here

    // use the allocated person object

    free(p); // don't forget to free the allocated memory

    return 0;
}