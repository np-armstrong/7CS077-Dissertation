// Generate javascript code for the following: 
//  The file_is_safe_type function is a function that checks if the file is safe to upload.
//  The upload_file function is the function that handles the upload of the file.
//  The p.save(os.path.join('uploads' filename)) line saves the file to the uploads folder.
//  The uploads folder is created in the same directory as the source file.

const fs = require('fs');
const path = require('path');

function file_is_safe_type(fileType) {
    // Add your logic here to check if the file type is safe
    // Return true if the file type is safe, otherwise return false
}

function upload_file(file) {
    if (file_is_safe_type(file.type)) {
        const uploadsDir = path.join(__dirname, 'uploads');
        if (!fs.existsSync(uploadsDir)) {
            fs.mkdirSync(uploadsDir);
        }
        const filePath = path.join(uploadsDir, file.name);
        fs.writeFileSync(filePath, file.data);
        console.log('File uploaded successfully!');
    } else {
        console.log('File type is not safe to upload!');
    }
}

// Usage example
const file = {
    name: 'example.txt',
    type: 'text/plain',
    data: 'This is the content of the file',
};

upload_file(file);