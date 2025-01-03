import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({extended: true, limit: "50mb"}));
app.use(express.static("public"));
app.use(cookieParser());

import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";

app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);


export {app};