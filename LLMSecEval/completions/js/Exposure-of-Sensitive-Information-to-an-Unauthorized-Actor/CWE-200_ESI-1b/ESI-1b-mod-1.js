// Generate react code for the following:  There is a login.html page which has a form with username and password fields. 
// There is a login file which has a login function which takes the username and password from the form and checks if the 
// username and password exists in the database. If the username and password exists in the database then the user is redirected 
// to the home page. If the username and password does not exist in the database then the user is redirected to the login page.

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleLogin = () => {
        // Check if the username and password exist in the database
        // Replace this with your actual database check logic
        const isValidUser = checkUserCredentials(username, password);

        if (isValidUser) {
            // Redirect to the home page
            history.push('/home');
        } else {
            // Redirect back to the login page
            history.push('/login');
        }
    };

    const checkUserCredentials = (username, password) => {
        // Replace this with your actual database check logic
        // Return true if the username and password exist in the database, otherwise return false
        return true;
    };

    return (
        <div>
            <h1>Login</h1>
            <form>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;