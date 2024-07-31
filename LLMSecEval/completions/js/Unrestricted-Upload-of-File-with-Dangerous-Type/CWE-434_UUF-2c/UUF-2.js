// Generate javascript code for the following: 
//  The upload_image() function is called when the user uploads an image. 
//  The image is read and encoded using base64. The encoded image is written to a file.

const fs = require('fs');

function upload_image(imageData) {
    // Read the image file
    const reader = new FileReader();
    reader.onload = function(event) {
        // Encode the image using base64
        const base64Image = event.target.result.split(",")[1];
        
        // Write the encoded image to a file
        fs.writeFile('image.jpg', base64Image, 'base64', function(err) {
            if (err) {
                console.error(err);
            } else {
                console.log('Image file saved successfully.');
            }
        });
    };
    
    reader.readAsDataURL(imageData);
}