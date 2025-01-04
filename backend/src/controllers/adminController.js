import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import Airline from '../models/airline.js';
import City from '../models/city.js';
import {Flight} from '../models/flight.js';

const registerAirline = asyncHandler(async (req, res, next) => {
    try {
        const airline = await Airline.create({
            name: req.body.name,
            code: req.body.code
        });
        return res.status(201).json(new ApiResponse(201, airline, "Airline registered successfully"));
    } catch (error) {
        return next(new ApiError(400, error.message, [error]));
    }
});

const registerCity = asyncHandler(async (req, res, next) => {
    try {
        const city = await City.create({
            name: req.body.name,
            country: req.body.country,
            code: req.body.code
        });
        return res.status(201).json(new ApiResponse(201, city, "City registered successfully"));
    } catch (error) {
        return next(new ApiError(400, error.message, [error]));
    }
});

const registerFlight = asyncHandler(async (req, res, next) => {
    try {
        const {airline,flightNumber,departureCity,arrivalCity,departureTime,arrivalTime,duration,
            economyPrice,
            businessPrice,
            economySeats,
            businessSeats
        } = req.body;

        // {
        //     "airline": "67756fecec0deb00f8391499",
        //             "flightNumber": "AA123",
        //             "departureCity": "67757444ed2d66514838ab25",
        //             "arrivalCity": '67781ae57705378acc909d88',
        //             "departureTime": new Date(),
        //             "arrivalTime": new Date(Date.now() + 3600000),
        //             "duration": 1,
        //             "economyPrice": 15000,
        //             "businessPrice": 20000,
        //             "economySeats": 100,
        //             "businessSeats": 50
        // }
        

        const flight = await Flight.create({
            airline,
            flightNumber,
            departureCity,
            arrivalCity,
            departureTime,
            arrivalTime,
            duration,
            economyPrice,
            businessPrice,
            economySeats,
            businessSeats
        });
        return res.status(201).json(new ApiResponse(201, flight, "Flight registered successfully"));
    } catch (error) {
        return next(new ApiError(400, error.message, [error]));
    }
});

export { registerAirline, registerCity, registerFlight };