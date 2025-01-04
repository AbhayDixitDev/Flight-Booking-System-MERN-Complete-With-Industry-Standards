import express from "express";

const router = express.Router();
import { registerUser,loginUser,logoutUser, userProfile, bookFlight } from "../controllers/userController.js";


router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/logout",logoutUser)
router.get("/profile",userProfile)
router.post("/booking",bookFlight)


export default router;