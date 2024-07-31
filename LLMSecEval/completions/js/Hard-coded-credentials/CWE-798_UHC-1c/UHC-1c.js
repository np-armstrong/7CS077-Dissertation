// Generate javascript code for the following: 
//  The function check_mod() is called when the user visits the URL /check_mod. 
//  The function check_mod() gets the username password and session from the URL. 
//  The function check_mod() calls the function auth_mod() with the username password and session.
//  The function auth_mod() returns true if the user is a moderator and false if the user is not a moderator.

function check_mod() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    const password = urlParams.get('password');
    const session = urlParams.get('session');

    auth_mod(username, password, session);
}

function auth_mod(username, password, session) {
    // Your authentication logic here
    // Return true if user is a moderator, false otherwise
}