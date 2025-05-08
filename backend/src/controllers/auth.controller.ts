import bcrypt from "bcryptjs";
import { generateJWT, multerFileToBase64 } from "../lib/utils.js";
import User from "../models/user.model.js";
import { RequestHandler} from "express";

export const signup: RequestHandler = async (req, res) => {
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

        const user = (await User.find()).find((u) => u.email === email);

        if (user) {
            res.status(400).json({ message: "Email already exists" });
            return;
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
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
        } else {
            res.status(400).json({ message: "Invalid user data" });
        }
    } catch (error: any) {
        console.log("Error in signup controller:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const login: RequestHandler = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ message: "Missing required fields" });
            return;
        }

        const user = (await User.find()).find((u) => u.email === email);

        if (!user) {
            res.status(400).json({ message: "Invalid credentials" });
            return;
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.hash);

        if (!isPasswordCorrect) {
            res.status(400).json({ message: "Invalid credentials" });
            return;
        }

        generateJWT(user.id || 0, res);

        res.status(200).json({
            id: user.id,
            username: user.username,
            email: user.email,
            profilePic: user.profilePic,
        });
    } catch (error: any) {
        console.log("Error in login controller:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const logout: RequestHandler = async (_req, res) => {
    try {
        res.cookie(process.env.JWT_COOKIE_NAME || "jwtauthtoken", "", {
            maxAge: 0,
        });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error: any) {
        console.log("Error in logout controller:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const updateProfile: RequestHandler = async (req, res) => {
    try {
        const profilePic = req.file;

        //@ts-ignore
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

        // Find the user by ID, update the profilePic and return the updated user (without password)
        const updatedUser = await User.update(
            //@ts-ignore
            req.user.id,
            { profilePic: base64Image, new: true }
        );

        res.status(200).json(updatedUser);
    } catch (error: any) {
        console.log("Error in update profile controller:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const checkAuth: RequestHandler = async (req, res) => {
    try {
        //@ts-ignore
        req.user.profilePic = undefined;
        //@ts-ignore
        res.status(200).json(req.user);
    } catch (error: any) {
        console.log("Error in checkAuth controller:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getProfilePic: RequestHandler = async (req, res) => {
    try {
        //@ts-ignore
        res.status(200).json({ profilePic: req.user.profilePic });
    } catch (error: any) {
        console.log("Error in getProfilePic controller:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
