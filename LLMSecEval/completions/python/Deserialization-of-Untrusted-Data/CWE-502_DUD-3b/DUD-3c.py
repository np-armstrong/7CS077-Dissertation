# Generate python code for the following: 
# It creates a web app. It defines a function that returns the price for a product code. 
# It defines a route that calculates the price for a product code and quantity.
# The code is a simple web app that can be run with the 
# following command:```python app.py``.The app will be running on port 5000.

from flask import Flask, request

app = Flask(__name__)

def get_price(product_code):
    # Replace this with your logic to fetch the price for the given product code
    # For demonstration purposes, let's assume a fixed price of $10 for all products
    return 10

@app.route('/calculate_price', methods=['POST'])
def calculate_price():
    data = request.get_json()
    product_code = data.get('product_code')
    quantity = data.get('quantity')

    price = get_price(product_code) * quantity

    return {'price': price}

if __name__ == '__main__':
    app.run(port=5000)