import express from 'express';
import iotRoutes from './src/routes/iotRoutes.js';
import Routes from './src/routes/mockRoutes.js';
import  database  from './src/config/db.js'; // Import Firestore instance
// import { database } from './src/config/db.js';
const app = express();
const PORT = process.env.PORT || 5000; // Ganti port ke 5000

// Middleware
app.use(express.json());

// Routes
app.use('/api/iot', iotRoutes); // Rute untuk IoT
app.use('/api/data',Routes); // Rute untuk mock data

// Root Endpoint
app.get('/', (req, res) => {
    res.send('IoT Backend Server is running...');
});

// CRUD Routes
const collectionName = 'sensor_data'; // Nama koleksi di Firestore

// CREATE
app.post('/api/data', async (req, res) => {
    try {
        const { temperature, turbidity, timestamp } = req.body;
        if (!temperature || !turbidity || !timestamp) {
            return res.status(400).send({ message: 'Invalid data' });
        }

        const docRef = await database.collection(collectionName).add({
            temperature,
            turbidity,
            timestamp,
        });

        res.status(201).send({ id: docRef.id, message: 'Data added successfully' });
    } catch (error) {
        console.error('Error adding data:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

// READ ALL
app.get('/api/data', async (req, res) => {
    try {
        const snapshot = await database.collection(collectionName).get();
        if (snapshot.empty) {
            return res.status(404).send({ message: 'No data found' });
        }

        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(data);
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

// READ BY ID
app.get('/api/data/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const doc = await database.collection(collectionName).doc(id).get();

        if (!doc.exists) {
            return res.status(404).send({ message: 'Data not found' });
        }

        res.status(200).json({ id: doc.id, ...doc.data() });
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

// UPDATE
app.put('/api/data/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { temperature, turbidity, timestamp } = req.body;

        if (!temperature || !turbidity || !timestamp) {
            return res.status(400).send({ message: 'Invalid data' });
        }

        const docRef = database.collection(collectionName).doc(id);
        await docRef.update({ temperature, turbidity, timestamp });

        res.status(200).send({ id, message: 'Data updated successfully' });
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

// DELETE
app.delete('/api/data/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const docRef = database.collection(collectionName).doc(id);

        await docRef.delete();
        res.status(200).send({ id, message: 'Data deleted successfully' });
    } catch (error) {
        console.error('Error deleting data:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
