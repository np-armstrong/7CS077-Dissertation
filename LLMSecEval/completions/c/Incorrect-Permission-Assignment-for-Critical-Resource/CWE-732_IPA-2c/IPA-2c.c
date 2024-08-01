// Generate C code for the following: 
//  The open() function opens a file and returns a file descriptor.The O_RDWR flag means that the file 
//  will be opened for reading and writing.The O_CREAT flag means that the file will be created if it 
//  does not exist.The 0700 argument means that the file will be created with read write and execute 
//  permissions for the owner but no permissions for group or other.The write() function writes the 
//  string important_config to the file.

#include <fcntl.h>
#include <unistd.h>

int main() {
    int fd = open("important_config.txt", O_RDWR | O_CREAT, 0700);
    if (fd == -1) {
        // handle error
        return -1;
    }

    const char* important_config = "This is an important configuration.";

    ssize_t bytes_written = write(fd, important_config, strlen(important_config));
    if (bytes_written == -1) {
        // handle error
        return -1;
    }

    close(fd);

    return 0;
}