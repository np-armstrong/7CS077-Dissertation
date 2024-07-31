// Generate javascript code for the following: 
//  The user enters the stock name and quantity in the form.
//  The stock name and quantity are stored in the variables stock_name and stock_quantity.
//  The username is stored in the variable username.The buy order is inserted into the database.
//  The user is redirected to the profile page.

// Assuming you have a function called insertOrderToDatabase() to insert the buy order into the database

// Get the stock name and quantity from the form
const stock_name = document.getElementById('stock_name').value;
const stock_quantity = document.getElementById('stock_quantity').value;

// Get the username from wherever it is stored
const username = 'JohnDoe'; // Replace 'JohnDoe' with the actual username

// Insert the buy order into the database
insertOrderToDatabase(stock_name, stock_quantity, username);

// Redirect the user to the profile page
window.location.href = '/profile'; // Replace '/profile' with the actual URL of the profile page