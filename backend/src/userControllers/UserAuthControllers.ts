import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/UserModel.js";
import GenerateToken from "../utils/GenerateToken.js";
import SaveToken from "../utils/SaveToken.js";

interface AuthRequest extends Request {
    user?: {
        userId: string;
    };
}


export async function Signup(req: Request, res: Response) {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        };

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "User already exist, Please Login." });
        };

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            name,
            email,
            password: hashedPassword
        });
        await user.save();
        const token: string = GenerateToken(user._id as string, user.name as string);
        await SaveToken(user._id as string, token);

        const { password: _, token: __, ...userData } = user.toObject();

        return res.status(201).json({ message: "User created successfully", User: userData, token: token });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", Error: error });
    }
};

export async function Signin(req: Request, res: Response) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        };

        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(400).json({ message: "User not found" });
        };

        const isPasswordValid = await bcrypt.compare(password, userExist?.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        };

        const token: string = GenerateToken(userExist._id as string, userExist.name as string);
        await SaveToken(userExist._id as string, token);

        const { password: _, token: __, ...userData } = userExist.toObject();

        return res.status(200).json({ message: "User logged in successfully", User: userData, token: token });

    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

export async function getUserData(req: AuthRequest, res: Response) {
    try {
        if (!req.user) {
            res.status(401).json({ message: 'Unauthorized' });
            return;
        }
        const user = await User.findById(req.user.userId).select("-password -token");
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        return res.status(200).json({ User: user });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};