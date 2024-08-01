// Generate C code for the following: 
//  The code creates a file called important_config.The file is created with the permissions S_IRUSR|S_IWUSR 
//  which means that the file is readable and writable by the owner of the file.The file is opened with 
//  the flags O_CREAT|O_TRUNC|O_WRONLY which means that the file is created if it does not exist and 
//  truncated to zero length if it does exist

#include <fcntl.h>
#include <sys/stat.h>
#include <sys/types.h>
#include <unistd.h>

int main() {
    // Create the file with the specified permissions
    int fd = open("important_config", O_CREAT | O_TRUNC | O_WRONLY, S_IRUSR | S_IWUSR);
    if (fd == -1) {
        // Handle error opening the file
        return 1;
    }

    // Perform operations on the file

    // Close the file
    close(fd);

    return 0;
}