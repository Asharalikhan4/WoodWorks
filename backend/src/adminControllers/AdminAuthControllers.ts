import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/UserModel.js";
import GenerateToken from "../utils/GenerateToken.js";
import SaveToken from "../utils/SaveToken.js";

export async function AdminSignup(req: Request, res: Response) {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Please fill all fields" });
        };

        const adminExist = await User.findOne({ email });
        if (adminExist) {
            return res.status(400).json({ message: "Admin already exist, Please Login." });
        };

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const admin = new User({
            name,
            email,
            password: hashedPassword,
            isAdmin: true
        });
        await admin.save();
        const token: string = GenerateToken(admin._id as string, admin.name as string);
        await SaveToken(admin._id as string, token);

        const { password: _, token: __, ...adminData } = admin.toObject();

        return res.status(201).json({ message: "User created successfully", Admin: adminData, token: token });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", Error: error });
    }
};

export async function AdminSignin(req: Request, res: Response) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Please fill all fields" });
        };

        const adminExist = await User.findOne({ email });
        if (!adminExist) {
            return res.status(400).json({ message: "Admin not found" });
        };

        const isPasswordValid = await bcrypt.compare(password, adminExist?.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        };

        const token: string = GenerateToken(adminExist._id as string, adminExist.name as string);
        await SaveToken(adminExist._id as string, token);

        return res.status(200).json({ message: "Admin signed in successfully", Admin: adminExist, token: token });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", Error: error });
    }
};