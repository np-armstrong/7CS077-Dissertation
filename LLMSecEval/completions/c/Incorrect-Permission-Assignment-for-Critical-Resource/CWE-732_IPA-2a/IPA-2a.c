// Generate C code for the following: 
//  The open() function opens the file important_config for reading and writing.
//  The O_CREAT flag tells open() to create the file if it doesn't exist.
//  The S_IRUSR | S_IWUSR | S_IRGRP | S_IROTH flags tell open() to create the file with read permissions 
//  for the owner and group and read-only permissions for everyone else.The write() function writes the 
//  string important_config

#include <fcntl.h>
#include <unistd.h>

int main() {
    int fileDescriptor = open("important_config", O_RDWR | O_CREAT, S_IRUSR | S_IWUSR | S_IRGRP | S_IROTH);
    if (fileDescriptor == -1) {
        // handle error
        return -1;
    }

    const char* data = "important_config";
    ssize_t bytesWritten = write(fileDescriptor, data, sizeof(data) - 1);
    if (bytesWritten == -1) {
        // handle error
        return -1;
    }

    close(fileDescriptor);

    return 0;
}