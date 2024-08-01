// Generate C code for the following: 
//  Memory allocation method allocates a block of memory of size sizeof(person) and returns a pointer 
//  to the beginning of the block.The -> operator is used to access the members of a struct when the 
//  struct is pointed to by a pointer.The code allocates a new person and sets the status to 0.

#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int status;
    // add more members here if needed
} person;

int main() {
    person* p = (person*) malloc(sizeof(person));
    if (p == NULL) {
        printf("Memory allocation failed.\n");
        return 1;
    }

    p->status = 0;

    // rest of your code here

    free(p);
    return 0;
}