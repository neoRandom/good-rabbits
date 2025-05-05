import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { NextFunction, Request, Response } from "express";
import { AuthToken } from "../types/index.js";

export const protectRoute = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const rawToken =
            req.cookies[process.env.JWT_COOKIE_NAME || "jwtauthtoken"];

        if (!rawToken) {
            res.status(401).json({
                message: "Unauthorized - No Token Provided",
            });
            return;
        }

        const token = jwt.verify(
            rawToken,
            process.env.JWT_SECRET!
        ) as AuthToken;

        if (!token.userID) {
            res.status(401).json({ message: "Unauthorized - Invalid Token" });
            return;
        }

        const user = await User.findById(token.userID);

        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        // @ts-ignore
        req.user = user;

        next();
    } catch (error: any) {
        console.log("Error in protectRoute middleware:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
