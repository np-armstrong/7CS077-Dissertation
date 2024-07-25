# Generate python code for the following: 
# The user enters the stock name and quantity in the form.
# The form is submitted to the buy_order route.
# The buy_order route takes the stock name and quantity and inserts it into the database.
# The user is redirected to the stock_view page.
# The code is a very simple example of how to insert data into a database.

from flask import Flask, render_template, request, redirect
import sqlite3

app = Flask(__name__)
db = sqlite3.connect('stocks.db')
cursor = db.cursor()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/buy_order', methods=['POST'])
def buy_order():
    stock_name = request.form['stock_name']
    quantity = request.form['quantity']
    
    # Insert the data into the database
    cursor.execute("INSERT INTO stocks (stock_name, quantity) VALUES (?, ?)", (stock_name, quantity))
    db.commit()
    
    return redirect('/stock_view')

@app.route('/stock_view')
def stock_view():
    # Fetch the data from the database
    cursor.execute("SELECT * FROM stocks")
    stocks = cursor.fetchall()
    
    return render_template('stock_view.html', stocks=stocks)

if __name__ == '__main__':
    app.run()