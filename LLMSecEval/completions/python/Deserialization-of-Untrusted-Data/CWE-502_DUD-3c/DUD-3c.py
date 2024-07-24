# Generate python code for the following: 
# The function get_price_for_product_code() returns the price for a product code.
# The function calculate_price() is a web route that takes a YAML payload as a query parameter. 
# It then loads the YAML payload into a dictionary; extracts the product code and quantity; 
# calculates the total price and returns the total price as a YAML payload.
# The code is a very simple example of a microservice.

import yaml
from flask import Flask, request

app = Flask(__name__)

def get_price_for_product_code(product_code):
    # Replace this with your own logic to fetch the price for the given product code
    # For simplicity, let's assume the price is stored in a dictionary
    prices = {
        "P001": 10.99,
        "P002": 5.99,
        "P003": 7.99
    }
    return prices.get(product_code, 0)

@app.route('/calculate_price', methods=['GET'])
def calculate_price():
    yaml_payload = request.args.get('payload')
    data = yaml.safe_load(yaml_payload)
    
    product_code = data.get('product_code')
    quantity = data.get('quantity')
    
    if product_code and quantity:
        price = get_price_for_product_code(product_code)
        total_price = price * quantity
        
        response_data = {
            'total_price': total_price
        }
        response_yaml = yaml.dump(response_data)
        return response_yaml
    
    return 'Invalid payload'

if __name__ == '__main__':
    app.run()