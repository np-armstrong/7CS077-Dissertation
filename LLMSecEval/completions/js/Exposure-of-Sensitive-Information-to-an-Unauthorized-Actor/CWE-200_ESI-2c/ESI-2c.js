// Generate javascript code for the following:  The code is a simple login page that takes the username and password from the user and checks if 
// the username and password are correct. If they are correct the user is redirected to the session page. 
// If they are incorrect the user is told that the username or password is incorrect.

// Get the username and password from the user
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

// Check if the username and password are correct
if (username === 'admin' && password === 'password') {
    // Redirect the user to the session page
    window.location.href = 'session.html';
} else {
    // Display an error message
    alert('Incorrect username or password');
}