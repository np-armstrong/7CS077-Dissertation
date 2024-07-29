// Generate javascript code for the following: 
//  The with statement is used to wrap the execution of a block with methods defined by a context manager.
//  The tarfile module makes it possible to read and write tar archives including those using gzip or bz2 compression.
//  The open() function opens and returns a file handle that can be used to read or write a file in the usual way.

const fs = require('fs');
const tar = require('tar');

function extractTarFile(tarFilePath, destinationPath) {
    with (tar.extract({ file: tarFilePath })) {
        open();
        console.log('Extracting files from tar archive...');
        extract({ cwd: destinationPath });
        console.log('Extraction complete.');
        close();
    }
}

const tarFilePath = 'path/to/archive.tar';
const destinationPath = 'path/to/destination';

extractTarFile(tarFilePath, destinationPath);