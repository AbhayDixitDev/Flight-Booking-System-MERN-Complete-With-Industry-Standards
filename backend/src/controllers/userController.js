import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { ApiError } from '../utils/ApiError.js';
import {User} from '../models/user.js';


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



export {registerUser}