// Generate javascript code for the following: 
//  The function get_price_for_product_code() returns the price for a product code.
//  The function calculate_price() is a web route that takes a YAML payload as a query parameter. 
//  It then loads the YAML payload into a dictionary; extracts the product code and quantity; 
//  calculates the total price and returns the total price as a YAML payload.
//  The code is a very simple example of a microservice.

const express = require('express');
const yaml = require('js-yaml');

const app = express();
const port = 3000;

// Function to get the price for a product code
function get_price_for_product_code(productCode) {
    // Replace this with your own logic to fetch the price for the given product code
    // For demonstration purposes, we'll return a fixed price of $10
    return 10;
}

// Web route to calculate the total price based on the YAML payload
app.get('/calculate_price', (req, res) => {
    try {
        const yamlPayload = req.query.payload;
        const payload = yaml.load(yamlPayload);

        const productCode = payload.productCode;
        const quantity = payload.quantity;

        const price = get_price_for_product_code(productCode);
        const totalPrice = price * quantity;

        const responsePayload = {
            totalPrice: totalPrice
        };

        const responseYaml = yaml.dump(responsePayload);

        res.send(responseYaml);
    } catch (error) {
        res.status(400).send('Invalid YAML payload');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});