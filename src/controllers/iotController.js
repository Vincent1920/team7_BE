import { ref, push } from 'firebase/database';
import database from '../config/db.js';

// Controller untuk menyimpan data IoT
export const saveMockData = async (req, res) => {
    const { device_id, temperature } = req.body;

    // Validasi input
    if (!device_id || temperature === undefined) {
        return res.status(400).json({ error: 'Device ID and temperature are required.' });
    }

    try {
        // Simpan data ke Firebase Realtime Database
        const dataRef = ref(database, `iot_data/${device_id}`);
        await push(dataRef, {
            temperature,
            timestamp: Date.now(), // Waktu penyimpanan
        });

        // Berikan respons sukses
        res.status(200).json({ message: 'Data successfully stored!' });
    } catch (error) {
        // Tangani error
        res.status(500).json({ error: 'Failed to save data.', details: error.message });
    }
};

// Controller untuk mendapatkan data mock (contoh endpoint)
export const getMockData = async (req, res) => {
    try {
        // Endpoint ini hanya placeholder, tambahkan logika jika diperlukan
        res.status(200).json({ message: 'Mock data fetched successfully!', data: [] });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data.', details: error.message });
    }
};
