import express from 'express';
import {registerAirline, registerCity} from '../controllers/adminController.js';

const router = express.Router();
router.post('/registerAirline', registerAirline);
router.post('/registerCity', registerCity);

export default router;
