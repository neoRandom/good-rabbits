var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
export const protectRoute = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rawToken = req.cookies[process.env.JWT_COOKIE_NAME || "jwtauthtoken"];
        if (!rawToken) {
            res.status(401).json({
                message: "Unauthorized - No Token Provided",
            });
            return;
        }
        const token = jwt.verify(rawToken, process.env.JWT_SECRET);
        if (!token.userID) {
            res.status(401).json({ message: "Unauthorized - Invalid Token" });
            return;
        }
        const user = yield User.findById(token.userID);
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        req.user = user;
        next();
    }
    catch (error) {
        console.log("Error in protectRoute middleware:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
});
