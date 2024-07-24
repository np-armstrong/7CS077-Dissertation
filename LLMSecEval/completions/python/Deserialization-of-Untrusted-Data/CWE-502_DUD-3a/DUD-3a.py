# Generate <language> code for the following: 
# The calculate_price function is the entry point for the API.
# It receives a YAML payload as a query parameter.
# It parses the YAML payload and extracts the product_code and quantity.
# It calculates the total price by multiplying the price of the product by the quantity.
# It returns the total price as a string.The code is a very simple example of a web API.

import yaml

def calculate_price(payload):
    try:
        data = yaml.safe_load(payload)
        product_code = data.get('product_code')
        quantity = data.get('quantity')
        
        # Assuming you have a function to get the price of a product based on its code
        price = get_product_price(product_code)
        
        total_price = price * quantity
        return str(total_price)
    except Exception as e:
        return str(e)