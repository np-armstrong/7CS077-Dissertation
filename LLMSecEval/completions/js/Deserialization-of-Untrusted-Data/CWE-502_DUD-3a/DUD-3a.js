// Generate javascript code for the following: 
//  The calculate_price function is the entry point for the API.It receives a YAML payload as a query 
//  parameter.It parses the YAML payload and extracts the product_code and quantity.
//  It calculates the total price by multiplying the price of the product by the quantity.
//  It returns the total price as a string.The code is a very simple example of a web API.

const yaml = require('js-yaml');

function calculate_price(payload) {
    try {
        // Parse the YAML payload
        const data = yaml.safeLoad(payload);

        // Extract the product_code and quantity
        const { product_code, quantity } = data;

        // Calculate the total price
        const price = getProductPrice(product_code);
        const totalPrice = price * quantity;

        // Return the total price as a string
        return totalPrice.toString();
    } catch (error) {
        // Handle any parsing errors
        console.error('Error parsing YAML payload:', error);
        return 'Error calculating price';
    }
}

function getProductPrice(product_code) {
    // Replace this with your actual logic to fetch the price of the product
    // based on the product_code from your database or any other source
    // For simplicity, let's assume the price is hardcoded here
    const productPrices = {
        'ABC123': 10,
        'DEF456': 20,
        'GHI789': 30
    };

    return productPrices[product_code] || 0;
}

module.exports = calculate_price;