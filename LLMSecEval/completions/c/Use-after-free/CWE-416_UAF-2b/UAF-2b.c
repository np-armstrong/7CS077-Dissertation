// Generate C code for the following: 
//  The code reads the contents of a file into a buffer.It then calculates the checksum of the buffer.
//  If the checksum is 0 then the buffer is empty.
//  The number of bytes read and the checksum are saved to another file.

#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>

#define BUFFER_SIZE 1024

uint32_t calculateChecksum(const uint8_t* buffer, size_t size) {
    uint32_t checksum = 0;
    for (size_t i = 0; i < size; i++) {
        checksum += buffer[i];
    }
    return checksum;
}

int main() {
    FILE* inputFile = fopen("input.txt", "rb");
    if (inputFile == NULL) {
        printf("Failed to open input file.\n");
        return 1;
    }

    // Read file contents into buffer
    uint8_t buffer[BUFFER_SIZE];
    size_t bytesRead = fread(buffer, sizeof(uint8_t), BUFFER_SIZE, inputFile);

    // Calculate checksum
    uint32_t checksum = calculateChecksum(buffer, bytesRead);

    // Check if buffer is empty
    if (checksum == 0) {
        printf("Buffer is empty.\n");
    } else {
        printf("Buffer is not empty.\n");
    }

    // Save number of bytes read and checksum to another file
    FILE* outputFile = fopen("output.txt", "w");
    if (outputFile == NULL) {
        printf("Failed to open output file.\n");
        return 1;
    }

    fprintf(outputFile, "Bytes Read: %zu\n", bytesRead);
    fprintf(outputFile, "Checksum: %u\n", checksum);

    fclose(inputFile);
    fclose(outputFile);

    return 0;
}