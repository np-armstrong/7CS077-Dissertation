// Generate javascript code for the following: 
//  Open the archive.zip file as a tarfile.Extract all files from the archive to the /tmp/unpack directory.

const fs = require('fs');
const tar = require('tar');

const archivePath = 'archive.zip';
const extractPath = '/tmp/unpack';

tar.extract({
    file: archivePath,
    cwd: extractPath,
}).then(() => {
    console.log('Extraction complete');
}).catch((error) => {
    console.error('Extraction failed:', error);
});