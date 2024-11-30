import express from 'express';
import { ref, set } from 'firebase/database';
import database from '../config/db.js'; 
// import database from '../config/firebase.js'; // Import konfigurasi Firebase

const router = express.Router();

// Generate data palsu
router.post('/save', async (req, res) => {
    try {
        // Data palsu (bisa juga menggunakan body dari request)
        const mockData = {
            temperature: (Math.random() * 10 + 20).toFixed(2), // Suhu 20°C - 30°C
            turbidity: (Math.random() * 5).toFixed(2), // Kekeruhan 0 - 5 NTU
            timestamp: new Date().toISOString(), // Waktu
        };

        // Simpan ke Firebase Realtime Database
        const dataRef = ref(database, `iotData/${Date.now()}`); // Path: iotData/{timestamp}
        await set(dataRef, mockData);

        res.status(200).json({ message: 'Data saved successfully', data: mockData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to save data', error });
    }
});

// Save multiple mock data
router.post('/save-multiple', async (req, res) => {
    try {
        const count = parseInt(req.query.count) || 5; // Jumlah data palsu
        const mockDataArray = Array.from({ length: count }, () => ({
            temperature: (Math.random() * 10 + 20).toFixed(2),
            turbidity: (Math.random() * 5).toFixed(2),
            timestamp: new Date().toISOString(),
        }));

        // Simpan tiap data ke Firebase
        for (const mockData of mockDataArray) {
            const dataRef = ref(database, `iotData/${Date.now()}`);
            await set(dataRef, mockData);
        }

        res.status(200).json({ message: 'Multiple data saved successfully', data: mockDataArray });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to save multiple data', error });
    }
});

// Export router untuk digunakan di app utama
export default router;
