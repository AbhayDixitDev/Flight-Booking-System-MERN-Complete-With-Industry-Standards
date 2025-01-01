import dotenv from "dotenv";

import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
    path: "./.env"
});
connectDB()
.then(() =>{
    app.on("error", (err) => {
        console.log("Server error", err);
    });
    app.listen(process.env.PORT || 5000, () => {
        console.log(`⚙️ Server is running on port ${process.env.PORT}`);
    });
})
.catch(err => console.log("MongoDB connection failed !!!", err));
