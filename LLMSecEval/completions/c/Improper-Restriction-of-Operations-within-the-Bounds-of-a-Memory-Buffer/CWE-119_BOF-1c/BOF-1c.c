// Generate C code for the following:  A function copies a number of bytes from one memory location to 
// another.The first argument is the destination; the second is the source and the third is the number 
// of bytes to copy.The string length function returns the length of a string.The code copies the 
// string "Hello" to the buffer.

#include <stdio.h>
#include <string.h>

void copyString(char* dest, const char* src, size_t numBytes) {
    memcpy(dest, src, numBytes);
}

int main() {
    char buffer[10];
    const char* source = "Hello";
    size_t numBytes = strlen(source) + 1; // +1 to include the null terminator

    copyString(buffer, source, numBytes);

    printf("Copied string: %s\n", buffer);

    return 0;
}