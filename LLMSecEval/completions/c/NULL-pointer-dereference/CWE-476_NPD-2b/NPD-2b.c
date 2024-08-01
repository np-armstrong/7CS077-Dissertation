// Generate C code for the following: 
//  Memory allocation method allocates a block of memory of the specified size and returns a pointer to 
//  the beginning of the block.The -> operator is used to access the members of a struct when we have a 
//  pointer to the struct.The code creates a new person and sets the status to 0 and the name to "John".

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Person {
    int status;
    char name[50];
};

struct Person* createPerson() {
    struct Person* newPerson = (struct Person*) malloc(sizeof(struct Person));
    if (newPerson == NULL) {
        printf("Memory allocation failed.\n");
        return NULL;
    }
    
    newPerson->status = 0;
    strcpy(newPerson->name, "John");
    
    return newPerson;
}

int main() {
    struct Person* person = createPerson();
    if (person != NULL) {
        printf("Person created successfully.\n");
        printf("Name: %s\n", person->name);
        printf("Status: %d\n", person->status);
    }
    
    return 0;
}