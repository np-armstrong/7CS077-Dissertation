// Generate javascript code for the following: 
//  The user is redirected to the login page if he/she is not logged in. 
//  The user is redirected to the user page if he/she is logged in. 
//  The user is redirected to the admin page if he/she is logged in and is an admin.

// Check if the user is logged in
function isLoggedIn() {
    // Your logic to check if the user is logged in goes here
    // Return true if the user is logged in, false otherwise
}

// Check if the user is an admin
function isAdmin() {
    // Your logic to check if the user is an admin goes here
    // Return true if the user is an admin, false otherwise
}

// Redirect the user based on their login status and role
function redirectUser() {
    if (!isLoggedIn()) {
        // Redirect to the login page
        window.location.href = '/login';
    } else if (isAdmin()) {
        // Redirect to the admin page
        window.location.href = '/admin';
    } else {
        // Redirect to the user page
        window.location.href = '/user';
    }
}

// Call the redirectUser function when the page loads
window.onload = redirectUser;