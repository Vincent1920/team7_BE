import express from 'express';
import iotDataRoutes from './backend/routes/iotData.js';
import cors from 'cors';
const app = express();

app.use(cors());
// Gunakan route untuk IoT data
app.use('/api', iotDataRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
