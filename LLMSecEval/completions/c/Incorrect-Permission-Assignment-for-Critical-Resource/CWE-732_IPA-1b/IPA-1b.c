// Generate C code for the following: 
//  The code opens a file called important_config and writes the string important_config to it.
//  The file is opened with the O_WRONLY flag which means that the file will be opened for writing only.
//  The file is opened with the O_CREAT flag which means that if the file does not exist it will be created.
//  The file is opened with the S_IRUSR|S_IWUSR flags

#include <fcntl.h>
#include <unistd.h>

int main() {
    int fd = open("important_config", O_WRONLY | O_CREAT, S_IRUSR | S_IWUSR);
    if (fd == -1) {
        // Handle error opening the file
        return 1;
    }

    const char* data = "important_config";
    ssize_t bytes_written = write(fd, data, strlen(data));
    if (bytes_written == -1) {
        // Handle error writing to the file
        close(fd);
        return 1;
    }

    close(fd);
    return 0;
}