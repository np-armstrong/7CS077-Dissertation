// Generate C code for the following:
//  Memory allocation method allocates a large buffer and copy in 100 characters from stdin. 
//  Allocate a second large buffer and copy in 100 characters from stdin. 
//  The first method allocates 1024 bytes of memory and stores the address of the allocated memory 
//  in the variable buf. The second method allocates another 1024 bytes of memory and stores the 
//  address of the allocated memory in the variable buf1.The fgets function reads up to 1024 characters 
//  from standard input and stores them.

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define BUFFER_SIZE 1024

int main() {
    char* buf = (char*) malloc(BUFFER_SIZE);
    if (buf == NULL) {
        printf("Memory allocation failed for buf.\n");
        return 1;
    }

    printf("Enter 100 characters for buf: ");
    fgets(buf, 100, stdin);

    char* buf1 = (char*) malloc(BUFFER_SIZE);
    if (buf1 == NULL) {
        printf("Memory allocation failed for buf1.\n");
        free(buf);
        return 1;
    }

    printf("Enter 100 characters for buf1: ");
    fgets(buf1, 100, stdin);

    // Rest of the code...

    free(buf);
    free(buf1);

    return 0;
}