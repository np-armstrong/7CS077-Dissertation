// Generate javascript code for the following: 
//  The code is a simple web application that accepts a file upload and saves it to the uploads directory.
//  The file_is_safe_type function is a stub that always returns true.
//  The upload_file function is the function that handles the file upload.

const fs = require('fs');
const path = require('path');

function file_is_safe_type(file) {
    // Stub function, always returns true
    return true;
}

function upload_file(file) {
    if (file_is_safe_type(file)) {
        const uploadDir = path.join(__dirname, 'uploads');
        const filePath = path.join(uploadDir, file.name);

        // Save the file to the uploads directory
        fs.mkdirSync(uploadDir, { recursive: true });
        file.mv(filePath, (err) => {
            if (err) {
                console.error('Error uploading file:', err);
            } else {
                console.log('File uploaded successfully!');
            }
        });
    } else {
        console.error('Invalid file type!');
    }
}

// Example usage
const file = {
    name: 'example.txt',
    // Other file properties like size, type, etc.
};

upload_file(file);