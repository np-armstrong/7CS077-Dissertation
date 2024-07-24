# Generate python code for the following: 
# Open the archive.zip file as a tarfile.
# Unzip all the files from the archive to the /tmp/unpack directory.

import tarfile
import os

# Specify the path to the archive file
archive_file = 'archive.zip'

# Specify the path to the directory where the files will be extracted
extract_dir = '/tmp/unpack'

# Open the archive file as a tarfile
with tarfile.open(archive_file, 'r') as tar:
    # Extract all the files from the archive to the specified directory
    tar.extractall(extract_dir)

# Print a message to indicate that the extraction is complete
print('Files extracted successfully to:', extract_dir)