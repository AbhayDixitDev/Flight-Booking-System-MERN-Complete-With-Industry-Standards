import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import { User } from '../models/user.js';
import { Booking } from '../models/booking.js';
import { Flight } from '../models/flight.js';

import {uploadOnCloudinary} from "../utils/Cloudinary.js"


const registerUser = asyncHandler(async (req, res, next) => {
    try {

        let { username, email, password, fullName, avatar, passportNumber } = req.body;
        // console.log(req.body);
        // console.log(req.file);
        
        
        avatar = await uploadOnCloudinary(req.file.path);
        // console.log(avatar);
        
        if (!avatar) return next(new ApiError(400, "Avatar is required"));

        avatar = avatar.secure_url
        
        
        
        const existingUser = await User.findOne({ email });
        if (existingUser) return next(new ApiError(400, "User already exists"));
        const user = await User.create({
            username,
            email,
            password,
            fullName,
            avatar,
            passportNumber
        });
        return res.status(201).json(new ApiResponse(201, user, "User registered successfully"));
    } catch (error) {
        return next(new ApiError(400, error.message, [error]));
    }
});

const loginUser = asyncHandler(async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return next(new ApiError(400, "User not found"));
        const isPasswordCorrect = await user.isPasswordCorrect(password);
        if (!isPasswordCorrect) return next(new ApiError(400, "Incorrect password"));
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        res.cookie("accessToken", accessToken, { httpOnly: true, secure: true, sameSite: "none" });
        res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: true, sameSite: "none" });
        return res.status(200).json(new ApiResponse(200, user, "User logged in successfully"));
    } catch (error) {
        return next(new ApiError(400, error.message, [error]));
    }
});

const loginAdmin = asyncHandler(async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        // console.log(user);
        
        if (!user) return next(new ApiError(400, "Incorrect email or password"));
        const isPasswordCorrect = await user.isPasswordCorrect(password);
        if (!isPasswordCorrect) return next(new ApiError(400, "Incorrect email or password"));
        if (!user.isAdmin) return next(new ApiError(400, "Please login with a admin account"));
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        res.cookie("accessToken", accessToken, { httpOnly: true, secure: true, sameSite: "none" });
        res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: true, sameSite: "none" });
        return res.status(200).json(new ApiResponse(200, user, "User logged in successfully"));
    } catch (error) {
        return next(new ApiError(400, error.message, [error]));
    }
});

const logoutUser = asyncHandler(async (req, res, next) => {
    try {
        res.clearCookie("accessToken");
        res.clearCookie("refreshToken");
        return res.status(200).json(new ApiResponse(200, null, "User logged out successfully"));
    } catch (error) {
        return next(new ApiError(400, error.message, [error]));
    }
})

const userProfile = asyncHandler(async (req, res, next) => {
    try {
        console.log(req);

        return res.status(200).json(new ApiResponse(200, "User profile fetched successfully"));
    } catch (error) {
        return next(new ApiError(400, error.message, [error]));
    }
});

const bookFlight = asyncHandler(async (req, res, next) => {
    try {
        const { flightDetails, bookingDate, passengers, userId } = req.body;


        const flight = await Flight.findById(flightDetails);
        if (!flight) return next(new ApiError(400, "Flight not found"));

        const booking = await Booking.create({
            flightDetails,
            userId,
            bookingDate,
            passengers,
            totalCost: flight.economyPrice * passengers.length
        });

        return res.status(201).json(new ApiResponse(201, booking, "Flight booked successfully"));
    } catch (error) {
        return next(new ApiError(400, error.message, [error]));
    }
});


export { registerUser, loginUser, logoutUser, userProfile, bookFlight, loginAdmin };