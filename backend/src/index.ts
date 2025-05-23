// Dependencies
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

// Utils
import path from "path";

// Libraries
import authRoutes from "./routes/auth.route.js";
// import { connectDB } from "./lib/db.js";

import { app, server } from "./lib/app.js";

//
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true,
    })
);

app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
    const __dirname = path.resolve();
    
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get("/*splat", (req, res) => {
        res.sendFile(path.join(__dirname, "..", "frontend", "dist", "index.html"))
    })
}

server.listen(process.env.PORT, () => {
    console.log(`server is running on PORT:${process.env.PORT}`);
    // connectDB();
});

