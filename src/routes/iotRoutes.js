import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('IoT data endpoint');
});

export default router;