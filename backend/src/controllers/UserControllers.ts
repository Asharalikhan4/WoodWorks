import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/UserModel.js";
import GenerateToken from "../utils/GenerateToken.js";
import SaveToken from "../utils/SaveToken.js";

export async function Signup(req: Request, res: Response) {
    try {
        const { name, email, password } = req.body;

        if(!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        };

        const userExist = await User.findOne({ email });
        if(userExist) {
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

        return res.status(201).json({ message: "User created successfully", Token: token });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", Error: error });
    }
};

export async function Signin(req: Request, res: Response) {
    try {
        const { email, password } = req.body;

        if(!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        };

        const userExist = await User.findOne({ email });
        if(!userExist) {
            return res.status(400).json({ message: "User not found" });
        };

        const isPasswordValid = await bcrypt.compare(password, userExist?.password);
        if(!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        };

        const token: string = GenerateToken(userExist._id as string, userExist.name as string);
        await SaveToken(userExist._id as string, token);

        return res.status(200).json({ message: "User logged in successfully", User: userExist });

    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};