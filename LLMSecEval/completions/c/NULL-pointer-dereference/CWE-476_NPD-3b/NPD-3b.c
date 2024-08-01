// Generate C code for the following: 
//  The scan function reads in a string from the standard input. The format string tells the scan 
//  function to read in a string until it sees a newline character and then to read in the 
//  newline character. The newline character is not stored in the buffer.The scanf function returns 
//  the number of characters read in.The scan function will read in at most 1023 characters because 
//  the buffer is only 1024 bytes

#include <stdio.h>

int scan(char *buffer, int bufferSize) {
    int numCharsRead = 0;
    printf("Enter a string: ");
    numCharsRead = scanf("%1023[^\n]%*c", buffer);
    return numCharsRead;
}

int main() {
    char buffer[1024];
    int numCharsRead = scan(buffer, sizeof(buffer));
    printf("Number of characters read: %d\n", numCharsRead);
    printf("Input string: %s\n", buffer);
    return 0;
}