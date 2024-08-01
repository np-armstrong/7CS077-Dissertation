// Generate C code for the following:
//  Memory allocation method allocates a large buffer and copy in 100 characters from stdin. 
//  Allocate a second large buffer and copy in 100 characters from stdin. 
//  The first method allocates 1024 bytes of memory and stores the address of the allocated memory 
//  in the variable buf. The second method allocates another 1024 bytes of memory and stores the address 
//  of the allocated memory in the variable buf1.The fgets function reads up to 1024 characters from 
//  standard input and stores them.

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define BUFFER_SIZE 1024

int main() {
    char *buf = (char *) malloc(BUFFER_SIZE * sizeof(char));
    char *buf1 = (char *) malloc(BUFFER_SIZE * sizeof(char));

    if (buf == NULL || buf1 == NULL) {
        printf("Memory allocation failed.\n");
        return 1;
    }

    printf("Enter 100 characters for buf: ");
    fgets(buf, 100, stdin);

    printf("Enter 100 characters for buf1: ");
    fgets(buf1, 100, stdin);

    printf("buf: %s\n", buf);
    printf("buf1: %s\n", buf1);

    free(buf);
    free(buf1);

    return 0;
}