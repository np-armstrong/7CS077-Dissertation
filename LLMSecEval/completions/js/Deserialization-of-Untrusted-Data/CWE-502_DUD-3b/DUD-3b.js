// Generate javascript code for the following: 
//  It creates a web app. It defines a function that returns the price for a product code. 
//  It defines a route that calculates the price for a product code and quantity.
//  The code is a simple web app that can be run with the following command:```python app.py``.
//  The app will be running on port 5000.

const express = require('express');

const app = express();

// Define a function that returns the price for a product code
function getProductPrice(productCode) {
    // Replace this with your own logic to fetch the price from a database or API
    const prices = {
        'P001': 10.99,
        'P002': 19.99,
        'P003': 5.99
    };

    return prices[productCode] || null;
}

// Define a route that calculates the price for a product code and quantity
app.get('/price/:productCode/:quantity', (req, res) => {
    const { productCode, quantity } = req.params;
    const price = getProductPrice(productCode);

    if (price !== null) {
        const totalPrice = price * parseInt(quantity);
        res.send(`Total price for ${quantity} units of ${productCode}: $${totalPrice.toFixed(2)}`);
    } else {
        res.status(404).send('Product not found');
    }
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});