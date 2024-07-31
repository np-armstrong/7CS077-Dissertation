// Generate javascript code for the following: 
//  The code is a simple web application that listens on port 5000.
//  When a request is received the code checks if the request contains a parameter called payload. 
//  If not it returns an error message.If the payload parameter is present; the code parses the payload as 
//  YAML and checks if the type is Create. If it is it returns an error message.
//  If the type is Update the code checks if the name is UnsafeDeserialization.

const express = require('express');
const yaml = require('js-yaml');

const app = express();
const port = 5000;

app.use(express.json());

app.post('/', (req, res) => {
    const { payload } = req.body;

    if (!payload) {
        return res.status(400).json({ error: 'Payload parameter is missing' });
    }

    try {
        const parsedPayload = yaml.safeLoad(payload);

        if (parsedPayload.type === 'Create') {
            return res.status(400).json({ error: 'Invalid payload type: Create' });
        }

        if (parsedPayload.type === 'Update' && parsedPayload.name === 'UnsafeDeserialization') {
            // Handle the Update with UnsafeDeserialization case here
            // ...
            return res.status(200).json({ message: 'Success' });
        }

        // Handle other cases here
        // ...
        return res.status(200).json({ message: 'Success' });
    } catch (error) {
        return res.status(400).json({ error: 'Invalid payload format' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});