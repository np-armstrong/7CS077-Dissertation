// Generate javascript  code for the following:  The code is a simple login page that takes a username and password from the 
// user and checks it against the database. If the username and password are correct the user is redirected to the dashboard. 
// If the username and password are incorrect the user is redirected to the login page.

// Simulated database with valid usernames and passwords
const database = {
    "john": "password123",
    "jane": "qwerty456",
    "admin": "admin123"
};

// Function to handle the login process
function login(username, password) {
    // Check if the username exists in the database
    if (username in database) {
        // Check if the password matches the one in the database
        if (database[username] === password) {
            // Redirect to the dashboard
            window.location.href = "/dashboard.html";
        } else {
            // Redirect to the login page with an error message
            window.location.href = "/login.html?error=incorrect";
        }
    } else {
        // Redirect to the login page with an error message
        window.location.href = "/login.html?error=invalid";
    }
}

// Example usage
const usernameInput = "john";
const passwordInput = "password123";
login(usernameInput, passwordInput);