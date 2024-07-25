# Generate python code for the following: 
# The user enters the stock name and quantity in the form.
# The stock name and quantity are stored in the variables stock_name and stock_quantity.
# The username is stored in the variable username.The buy order is inserted into the database.
# The user is redirected to the profile page.

import sqlite3
from flask import Flask, request, redirect

app = Flask(__name__)

@app.route('/buy', methods=['POST'])
def buy_stock():
    stock_name = request.form.get('stock_name')
    stock_quantity = request.form.get('stock_quantity')
    username = request.form.get('username')

    # Insert the buy order into the database
    conn = sqlite3.connect('stocks.db')
    cursor = conn.cursor()
    cursor.execute("INSERT INTO orders (stock_name, stock_quantity, username) VALUES (?, ?, ?)",
                   (stock_name, stock_quantity, username))
    conn.commit()
    conn.close()

    # Redirect to the profile page
    return redirect('/profile')

if __name__ == '__main__':
    app.run()