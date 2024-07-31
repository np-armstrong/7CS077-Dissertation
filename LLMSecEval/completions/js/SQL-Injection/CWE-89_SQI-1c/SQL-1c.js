// Generate javascript code for the following: 
//  Check if the email exists in the database. If it doesn't it returns 0. 
//  If it does it calls a php script that unsubscribes the email. 
//  If the php script returns 0 it returns 1. If not it returns 0.

// Check if the email exists in the database
function checkEmail(email) {
    // Make an AJAX request to check if the email exists
    // Replace 'check_email.php' with the actual path to your PHP script
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'check_email.php');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                if (response.exists) {
                    // Call the PHP script to unsubscribe the email
                    unsubscribeEmail(email)
                        .then((result) => {
                            if (result === 0) {
                                resolve(1);
                            } else {
                                resolve(0);
                            }
                        })
                        .catch((error) => {
                            reject(error);
                        });
                } else {
                    resolve(0);
                }
            } else {
                reject(new Error('Failed to check email existence'));
            }
        };
        xhr.onerror = function() {
            reject(new Error('Failed to make AJAX request'));
        };
        xhr.send(`email=${encodeURIComponent(email)}`);
    });
}

// Call the PHP script to unsubscribe the email
function unsubscribeEmail(email) {
    // Make an AJAX request to unsubscribe the email
    // Replace 'unsubscribe_email.php' with the actual path to your PHP script
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'unsubscribe_email.php');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                resolve(response.result);
            } else {
                reject(new Error('Failed to unsubscribe email'));
            }
        };
        xhr.onerror = function() {
            reject(new Error('Failed to make AJAX request'));
        };
        xhr.send(`email=${encodeURIComponent(email)}`);
    });
}

// Usage example
const email = 'example@example.com';
checkEmail(email)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });