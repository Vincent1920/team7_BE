from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
import os

app = Flask(__name__)
CORS(app)

@app.route("/data/<selectChart>")
def send_data(selectChart):
    current_dir = os.path.dirname(os.path.abspath(__file__))
    csv_path = os.path.join(current_dir, "../data/data.csv")
    df = pd.read_csv(csv_path)

    df['Timestamp'] = pd.to_datetime(df['Timestamp'])

    filtered_df = df[df['Timestamp'].dt.year == 2023]

    filtered_df.loc[:, 'Hour'] = filtered_df['Timestamp'].dt.hour

    if (selectChart == 'temperature'):
        avg_data = filtered_df.groupby('Hour')['Water_Temperature_C'].mean().reset_index()
    elif (selectChart == 'turbidity'):
        avg_data = filtered_df.groupby('Hour')['Turbidity_NTU'].mean().reset_index()
    else:
        return jsonify({"Error" : "Invalid parameter"}), 400

    all_hours = pd.DataFrame({'Hour': range(24)})
    
    avg_data = all_hours.merge(avg_data, on='Hour', how='left')

    return jsonify(avg_data.to_dict(orient='records'))

if __name__ == "__main__":
    app.run(debug=False)
