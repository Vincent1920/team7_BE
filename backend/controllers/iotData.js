import fs from 'fs';
import path from 'path';
import csvParser from 'csv-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const calculateDailyAverages = (year, month, parameter, res) => {
  const weeklyData = {
    'Senin': [],
    'Selasa': [],
    'Rabu': [],
    'Kamis': [],
    'Jumat': [],
    'Sabtu': [],
    'Minggu': [],
  };

  // Tentukan path file CSV
  const filePath = path.join(__dirname, '../../data/final_data.csv');

  // Baca file CSV
  fs.createReadStream(filePath)
    .pipe(csvParser())
    .on('data', (row) => {
      // console.log(`Row data ${row}`)
      const [csvYear, csvMonth, csvDay] = row.Timestamp.split(' ')[0].split('-');
      if (csvYear === year && csvMonth === month) {
        const date = `${csvYear}-${csvMonth}-${csvDay}`;
        const value = parseFloat(
          parameter === 'temperature'
            ? row.Water_Temperature_C
            : row.Turbidity_NTU
        ) || 0;

        const dayOfWeek = new Date(date).toLocaleString('id-ID', { weekday: 'long' });

        if(weeklyData[dayOfWeek]){
          weeklyData[dayOfWeek].push(value);
        }
      }
    })
    .on('end', () => {
      // Hitung rata-rata per hari dalam seminggu
      const weeklyAverages = Object.entries(weeklyData).map(([day, values]) => {
        const average = values.length > 0 
          ? values.reduce((sum, value) => sum + value, 0) / values.length 
          : 0;
        return { day, average };
      });
      console.log(weeklyAverages);
      res.status(200).json(weeklyAverages);
    })
    .on('error', (error) => {
      console.error('Error reading CSV file:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
};

// Controller untuk /temperature/:year/:month
export const getTemperatureData = (req, res) => {
  const { year, month } = req.params;
  calculateDailyAverages(year, month, 'temperature', res);
};

// Controller untuk /turbidity/:year/:month
export const getTurbidityData = (req, res) => {
  const { year, month } = req.params;
  calculateDailyAverages(year, month, 'turbidity', res);
};