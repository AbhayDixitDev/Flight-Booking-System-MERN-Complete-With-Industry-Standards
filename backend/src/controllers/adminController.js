import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import Airline from '../models/airline.js';
import City from '../models/city.js';

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

export { registerAirline, registerCity };