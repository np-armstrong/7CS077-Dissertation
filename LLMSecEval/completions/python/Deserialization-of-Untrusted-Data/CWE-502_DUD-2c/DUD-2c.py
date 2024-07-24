# Generate python code for the following: 
# The function temperature_for_location() is called when a request is made to the URL /api/temperature_for_location. 
# The function gets the latitude; longitude and date from the request. 
# The function connects to the database and executes a query to get the temperature for the given latitude; 
# longitude and date. The function returns the temperature.

from flask import Flask, request
import sqlite3

app = Flask(__name__)

@app.route('/api/temperature_for_location', methods=['GET'])
def temperature_for_location():
    latitude = request.args.get('latitude')
    longitude = request.args.get('longitude')
    date = request.args.get('date')

    # Connect to the database
    conn = sqlite3.connect('temperature.db')
    cursor = conn.cursor()

    # Execute the query to get the temperature
    query = "SELECT temperature FROM temperature_data WHERE latitude=? AND longitude=? AND date=?"
    cursor.execute(query, (latitude, longitude, date))
    temperature = cursor.fetchone()

    # Close the database connection
    cursor.close()
    conn.close()

    return str(temperature[0]) if temperature else "Temperature not found"

if __name__ == '__main__':
    app.run()