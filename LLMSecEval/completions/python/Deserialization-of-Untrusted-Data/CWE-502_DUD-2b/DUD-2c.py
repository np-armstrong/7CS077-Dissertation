# Generate python code for the following: 
# The code is a web application that listens for HTTP requests on the /api/temperature_for_location endpoint. 
# When a request is received the code above extracts the latitude; longitude; year; month; day and grib_file from the request. 
# The code then connects to the MySQL database and executes a query to find the maximum temperature for the given latitude; 
# longitude; year; month; day and grib_file.

from flask import Flask, request

import mysql.connector

app = Flask(__name__)

@app.route('/api/temperature_for_location', methods=['GET'])
def get_temperature_for_location():
    # Extracting parameters from the request
    latitude = request.args.get('latitude')
    longitude = request.args.get('longitude')
    year = request.args.get('year')
    month = request.args.get('month')
    day = request.args.get('day')
    grib_file = request.args.get('grib_file')

    # Connecting to the MySQL database
    db = mysql.connector.connect(
        host="localhost",
        user="your_username",
        password="your_password",
        database="your_database"
    )
    cursor = db.cursor()

    # Executing the query to find the maximum temperature
    query = "SELECT MAX(temperature) FROM temperature_data WHERE latitude = %s AND longitude = %s AND year = %s AND month = %s AND day = %s AND grib_file = %s"
    values = (latitude, longitude, year, month, day, grib_file)
    cursor.execute(query, values)
    result = cursor.fetchone()

    # Closing the database connection
    cursor.close()
    db.close()

    return str(result[0]) if result else "No temperature data found"

if __name__ == '__main__':
    app.run()