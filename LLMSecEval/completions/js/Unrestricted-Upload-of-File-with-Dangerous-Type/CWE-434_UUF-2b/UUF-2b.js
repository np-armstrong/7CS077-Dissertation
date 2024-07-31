// Generate javascript code for the following: 
//  The upload_image() function is called when the user uploads an image. 
//  The image is read and converted to base64. 
//  The image name and base64 string are inserted into the database.

function upload_image(imageFile) {
    // Read the image file
    const reader = new FileReader();
    reader.onload = function(event) {
        // Convert the image to base64
        const base64Image = event.target.result;

        // Get the image name
        const imageName = imageFile.name;

        // Insert the image name and base64 string into the database
        insertIntoDatabase(imageName, base64Image);
    };

    // Read the image file as data URL
    reader.readAsDataURL(imageFile);
}

function insertIntoDatabase(imageName, base64Image) {
    // Code to insert the image name and base64 string into the database goes here
    // ...
}