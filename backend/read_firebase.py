import pyrebase
import datetime as dt

firebaseConfig = {
    "apiKey" : "AIzaSyDqe5n_h7Aep6ThjhwTy_6GtyzB2vyPfiU",
    "authDomain" : "team7-e5280.firebaseapp.com",
    "databaseURL" : "https://team7-e5280-default-rtdb.firebaseio.com",
    "projectId" : "team7-e5280",
    "storageBucket" : "team7-e5280.firebasestorage.app",
    "messagingSenderId" : "92957058272",
    "appId" : "1:92957058272:web:838178bdf7a20672d95c85",
    "measurementId" : "G-V3XZ4LBLSN"
}

firebase = pyrebase.initialize_app(firebaseConfig)
db = firebase.database()

# keys
parent_id = 'contoh-akuarium-mu'
temperature_id = 'temperature'
turbiditiy_id = 'turbidity'

# values
value_temperature = 40
value_turbidity = 15

# Add data temperature
hour_temperature_id = dt.datetime.now().strftime(r'%H:%M')
date_temperature_id = dt.datetime.now().strftime(r'%Y-%m-%d')

db.child(parent_id).child(temperature_id).child('realtime_temperature').set(value_temperature)
db.child(parent_id).child(temperature_id).child(date_temperature_id).child(hour_temperature_id).set(value_temperature)

# Add data turbidity
hour_turbidity_id = dt.datetime.now().strftime(r'%H:%M')
date_turbidity_id = dt.datetime.now().strftime(r'%Y-%m-%d')

db.child(parent_id).child(turbiditiy_id).child('realtime_turbidity').set(value_turbidity)
db.child(parent_id).child(turbiditiy_id).child(date_turbidity_id).child(hour_turbidity_id).set(value_turbidity)
