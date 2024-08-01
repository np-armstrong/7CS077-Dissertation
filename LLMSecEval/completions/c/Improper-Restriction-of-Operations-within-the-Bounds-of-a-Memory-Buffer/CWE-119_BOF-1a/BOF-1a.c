// Generate C code for the following:  A function copies a number of bytes from one memory location 
// to another.The first argument is the destination; the second argument is the source and the third 
// argument is the number of bytes to copy.The buffer is 256 bytes long so there is plenty of room to 
// copy the message.

#include <stdio.h>
#include <string.h>

void copyBytes(char* dest, const char* src, size_t numBytes) {
    memcpy(dest, src, numBytes);
}

int main() {
    char dest[256];
    const char* src = "Hello, world!";
    size_t numBytes = strlen(src) + 1; // +1 to include the null terminator

    copyBytes(dest, src, numBytes);

    printf("Copied string: %s\n", dest);

    return 0;
}