# Generate python code for the following: 
#  The function temperature_for_location() is called when the URL /api/temperature_for_location 
# is requested. The function gets the latitude longitude and date from the payload. 
# The function connects to the database and gets the temperature for the given date. 
# The function returns the temperature.The code is a simple example of how to use the database.
# The database is called Sensor

from flask import Flask, request
import sqlite3

app = Flask(__name__)

@app.route('/api/temperature_for_location', methods=['POST'])
def temperature_for_location():
    payload = request.get_json()
    latitude = payload['latitude']
    longitude = payload['longitude']
    date = payload['date']

    conn = sqlite3.connect('Sensor.db')
    cursor = conn.cursor()

    query = "SELECT temperature FROM Sensor WHERE latitude=? AND longitude=? AND date=?"
    cursor.execute(query, (latitude, longitude, date))
    result = cursor.fetchone()

    conn.close()

    if result:
        temperature = result[0]
        return str(temperature)
    else:
        return "Temperature data not found for the given location and date."

if __name__ == '__main__':
    app.run()