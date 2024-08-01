// Generate C code for the following: 
//  It allocates a buffer of size buffer_size.It overwrites all values in the buffer with 'A'. 
//  The buffer is allocated on the stack.

#include <stdio.h>

void overwriteBuffer(int buffer_size) {
    char buffer[buffer_size];
    int i;

    for (i = 0; i < buffer_size; i++) {
        buffer[i] = 'A';
    }

    printf("Buffer contents: %s\n", buffer);
}

int main() {
    int buffer_size = 10;

    overwriteBuffer(buffer_size);

    return 0;
}