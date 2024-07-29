// Generate javascript code for the following:  There is a login.html page which has a form with username and password fields. 
// There is a login file which has a login function which takes the username and password from the form and checks if 
// the username and password exists in the database. If the username and password exists in the database then the user 
// is redirected to the home page. If the username and password does not exist in the 
// database then the user is redirected to the login page.

// login.html

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>
<body>
    <h1>Login</h1>
    <form id="loginForm" action="login.js" method="POST">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>
        <input type="submit" value="Login">
    </form>
</body>
</html>