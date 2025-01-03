import express from 'express';
import {registerAirline, registerCity, registerFlight} from '../controllers/adminController.js';

const router = express.Router();
router.post('/registerAirline', registerAirline);
router.post('/registerCity', registerCity);
router.post('/registerFlight', registerFlight);

export default router;
