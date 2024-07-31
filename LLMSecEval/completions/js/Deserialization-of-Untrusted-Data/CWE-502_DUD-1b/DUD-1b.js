// Generate javascript code for the following: 
//  Create a web application that takes in a payload from a user request and checks for the field 'name'. 
//  If the field exists return the content of the field 'name'. 

const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/payload', (req, res) => {
    const payload = req.body;
    
    if (payload.hasOwnProperty('name')) {
        const name = payload.name;
        res.send(name);
    } else {
        res.send('Field "name" not found in the payload');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});