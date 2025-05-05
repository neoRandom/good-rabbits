var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import bcrypt from "bcryptjs";
import { generateJWT, multerFileToBase64 } from "../lib/utils.js";
import User from "../models/user.model.js";
export const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            res.status(400).json({ message: "Missing required fields" });
            return;
        }
        if (password.length < 6) {
            res.status(400).json({
                message: "Password must be at least 6 characters",
            });
            return;
        }
        const user = (yield User.find()).find((u) => u.email === email);
        if (user) {
            res.status(400).json({ message: "Email already exists" });
            return;
        }
        const salt = yield bcrypt.genSalt(10);
        const hashedPassword = yield bcrypt.hash(password, salt);
        const newUser = yield User.create({
            username,
            email,
            hash: hashedPassword,
        });
        if (newUser) {
            generateJWT(newUser.id || 0, res);
            res.status(201).json({
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
                profilePic: newUser.profilePic,
            });
        }
        else {
            res.status(400).json({ message: "Invalid user data" });
        }
    }
    catch (error) {
        console.log("Error in signup controller:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
export const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ message: "Missing required fields" });
            return;
        }
        const user = (yield User.find()).find((u) => u.email === email);
        if (!user) {
            res.status(400).json({ message: "Invalid credentials" });
            return;
        }
        const isPasswordCorrect = yield bcrypt.compare(password, user.hash);
        if (!isPasswordCorrect) {
            res.status(400).json({ message: "Invalid credentials" });
            return;
        }
        generateJWT(user.id || 0, res);
        res.status(200).json({
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            profilePic: user.profilePic,
        });
    }
    catch (error) {
        console.log("Error in login controller:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
export const logout = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.cookie(process.env.JWT_COOKIE_NAME || "jwtauthtoken", "", {
            maxAge: 0,
        });
        res.status(200).json({ message: "Logged out successfully" });
    }
    catch (error) {
        console.log("Error in logout controller:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
export const updateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profilePic = req.file;
        if (!req.user) {
            res.status(401).json({ message: "Unauthorized - No User Defined" });
            return;
        }
        if (!profilePic) {
            res.status(400).json({ message: "Profile picture is required" });
            return;
        }
        if (profilePic.size > 4 * 1024 * 1024) {
            res.status(400).json({ message: "Image too large" });
            return;
        }
        const base64Image = multerFileToBase64(profilePic);
        if (!base64Image) {
            res.status(400).json({ message: "Invalid file format" });
            return;
        }
        const updatedUser = yield User.update(req.user.id, { profilePic: base64Image, new: true });
        res.status(200).json(updatedUser);
    }
    catch (error) {
        console.log("Error in update profile controller:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
export const checkAuth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.user.profilePic = undefined;
        res.status(200).json(req.user);
    }
    catch (error) {
        console.log("Error in checkAuth controller:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
});
export const getProfilePic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({ profilePic: req.user.profilePic });
    }
    catch (error) {
        console.log("Error in getProfilePic controller:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
});
