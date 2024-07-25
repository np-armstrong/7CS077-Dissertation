# Generate python code for the following: 
# The buy_stock function is called when the user clicks on the buy button.
# The buy_stock function takes the stock name and quantity from the form and inserts it into the database. 
# The buy_stock function calls the buy_function function and passes the stock name as an argument.
# The buy_function function takes the stock name as an argument.

import sqlite3

def buy_stock(stock_name, quantity):
    # Insert stock name and quantity into the database
    conn = sqlite3.connect('stocks.db')
    cursor = conn.cursor()
    cursor.execute("INSERT INTO stocks (stock_name, quantity) VALUES (?, ?)", (stock_name, quantity))
    conn.commit()
    conn.close()
    
    # Call buy_function and pass stock name as an argument
    buy_function(stock_name)

def buy_function(stock_name):
    # Perform actions related to buying the stock
    print(f"Buying stock: {stock_name}")

# Example usage
buy_stock("AAPL", 10)