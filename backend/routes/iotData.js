import express from 'express';
import { getTemperatureData, getTurbidityData } from '../controllers/iotData.js';

const router = express.Router();

// Endpoint untuk mendapatkan rata-rata temperature berdasarkan tahun dan bulan
router.get('/temperature/:year/:month', getTemperatureData);

// Endpoint untuk mendapatkan rata-rata turbidity berdasarkan tahun dan bulan
router.get('/turbidity/:year/:month', getTurbidityData);

export default router;
