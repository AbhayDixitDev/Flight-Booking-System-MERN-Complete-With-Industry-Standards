import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import {User} from '../models/user.js';
import {Booking} from '../models/booking.js';
import {Flight} from '../models/flight.js';


const registerUser = asyncHandler(async (req, res, next) => {
    try {

        const { username, email, password, fullName, avatar, passportNumber } = req.body;
        // const user = {
        //     name: "John Doe",
        //     email: "john@example.com",
        //     password: "password123",
        //     fullName: "John Doe",
        //     avatar: "https://res.cloudinary.com/dp0qych0n/image/upload/v1643834431/avatars/1_kjvtd1m.jpg",
        //     passportNumber: "1234567890"
        // };

        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            fullName: req.body.fullName,
            avatar: req.body.avatar,
            passportNumber: req.body.passportNumber
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
        if(!user) return next(new ApiError(400, "User not found"));
        const isPasswordCorrect = await user.isPasswordCorrect(password);
        if(!isPasswordCorrect) return next(new ApiError(400, "Incorrect password"));
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        res.cookie("accessToken", accessToken, {httpOnly: true, secure: true, sameSite: "none"});
        res.cookie("refreshToken", refreshToken, {httpOnly: true, secure: true, sameSite: "none"});
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
        
        
        // let user = await User.findById(req.user._id);
        // if(!user) return next(new ApiError(400, "User not found"));
        return res.status(200).json(new ApiResponse(200, "User profile fetched successfully"));
    } catch (error) {
        return next(new ApiError(400, error.message, [error]));
    }
});

const bookFlight = asyncHandler(async (req, res, next) => {
    try {
        const { flightDetails, bookingDate, passengers,userId } = req.body;
        // const user = req.user;

        const flight = await Flight.findById(flightDetails);
        if(!flight) return next(new ApiError(400, "Flight not found"));

        const booking = await Booking.create({
            flightDetails,
            userId ,
            bookingDate,
            passengers,
            totalCost: flight.economyPrice * passengers.length
        });
        // const flightDetails = {
        //     "_id": "61a7f5a7f1d3faa5f841a6b7",
        //     "airline": "67756fecec0deb00f8391499",
        //     "flightNumber": "AA123",
        //     "departureCity": "67757444ed2d66514838ab25",
        //     "arrivalCity": "67781ae57705378acc909d88",
        //     "departureTime": "2021-12-21T03:00:00.000Z",
        //     "arrivalTime": "2021-12-21T09:00:00.000Z",
        //     "duration": 6,
        //     "economyPrice": 15000,
        //     "businessPrice": 20000,
        //     "economySeats": 90,
        //     "businessSeats": 50
        // };
        // const bookingDate = new Date();
        // const passengers = [
            // {
            //     "firstName": "John",
            //     "lastName": "Doe",
            //     "age": 32,
            //     "gender": "MALE",
            //     "passportNumber": "IND1234567890"
            // },
            // {
            //     "firstName": "Jane",
            //     "lastName": "Doe",
            //     "age": 28,
            //     "gender": "FEMALE",
            //     "passportNumber": "IND9876543210"
            // }
        // ];

        return res.status(201).json(new ApiResponse(201, booking, "Flight booked successfully"));
    } catch (error) {
        return next(new ApiError(400, error.message, [error]));
    }
});


export {registerUser , loginUser, logoutUser, userProfile, bookFlight};