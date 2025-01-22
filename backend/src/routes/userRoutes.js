import express from "express";
const router = express.Router();
import { registerUser,loginUser,logoutUser, userProfile, bookFlight, loginAdmin } from "../controllers/userController.js";
import {upload} from "../middlewares/multer.js"


router.post("/register",upload.single("avatar"),registerUser)
router.post("/login",loginUser)
router.post("/adminLogin",loginAdmin)
router.get("/logout",logoutUser)
router.get("/profile",userProfile)
router.post("/booking",bookFlight)


export default router;