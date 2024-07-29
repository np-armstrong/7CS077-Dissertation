// Generate javascript code for the following:  There is a login page that takes in username and password. 
// There is a database that stores the username and password. 
// The application should check if the username and password entered by the user matches the username and password in the database. 
// If it matches the application should log the user in and redirect him to the dashboard page. 
// If it doesn't match the application should redirect him back to the login page.

// Simulated database with stored usernames and passwords
const database = {
    "user1": "password1",
    "user2": "password2",
    "user3": "password3"
};

// Function to check if the username and password match
function login(username, password) {
    if (database[username] === password) {
        console.log("Login successful!");
        // Redirect to dashboard page
        window.location.href = "/dashboard.html";
    } else {
        console.log("Invalid username or password");
        // Redirect back to login page
        window.location.href = "/login.html";
    }
}

// Example usage
const enteredUsername = "user1";
const enteredPassword = "password1";
login(enteredUsername, enteredPassword);