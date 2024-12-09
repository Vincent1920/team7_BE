import { database, ref, onValue } from '../../data/db.js';

const year = 2024;
const month = 11;
const parameter = 'suhu_air'; // Atau 'kekeruhan_air'

const dataRef = ref(database, `iotData/${year}/${month}`);

// Mendengarkan data secara realtime
onValue(dataRef, (snapshot) => {
  if (snapshot.exists()) {
    const data = snapshot.val();
    const parameterData = [];

    // Traverse data dan ambil nilai sesuai parameter
    for (const day in data) {
      for (const time in data[day]) {
        if (data[day][time][parameter]) {
          parameterData.push({
            date: `${year}-${month}-${day} ${time}`,
            value: data[day][time][parameter]
          });
        }
      }
    }

    // Lakukan sesuatu dengan data realtime
    console.log(parameterData); // Menampilkan data realtime
  } else {
    console.log('No data available');
  }
});
