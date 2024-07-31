// Generate javascript code for the following: 
//  The function check_mod() is called when the user visits the URL /check_mod. 
//  The function check_mod() gets the username and password from the URL. 
//  The function check_mod() checks if the username and password are correct. 
//  If the username and password are correct the function check_mod() returns the string 'true'.

function check_mod() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    const password = urlParams.get('password');

    // Check if username and password are correct
    if (username === 'correct_username' && password === 'correct_password') {
        return 'true';
    }
}