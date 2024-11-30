import { ref, push } from 'firebase/database';
import {database} from '../config/db.js';

// Controller untuk menyimpan data mock (data palsu)
export const saveMockData = async (req, res) => {
    const { device_id, temperature } = req.body;

    // Validasi input
    if (!device_id || temperature === undefined) {
        return res.status(400).json({ error: 'Device ID and temperature are required.' });
    }

    try {
        // Simpan data ke Firebase Realtime Database
        const dataRef = ref(database, `mock_data/${device_id}`);
        await push(dataRef, {
            temperature,
            timestamp: Date.now(), // Waktu penyimpanan
        });

        // Berikan respons sukses
        res.status(200).json({ message: 'Mock data successfully stored!' });
    } catch (error) {
        // Tangani error
        res.status(500).json({ error: 'Failed to save mock data.', details: error.message });
    }
};

// Controller untuk mendapatkan data mock
export const getMockData = async (req, res) => {
    try {
        // Dapatkan referensi data dari Firebase
        const snapshot = await ref(database, 'mock_data').once('value');
        const data = snapshot.val();

        if (!data) {
            return res.status(404).json({ message: 'No mock data found.' });
        }

        // Kirimkan data mock
        res.status(200).json({ message: 'Mock data fetched successfully!', data });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch mock data.', details: error.message });
    }
};
