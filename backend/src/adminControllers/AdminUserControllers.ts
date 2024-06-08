import { Request, Response } from "express";
import User from "../models/UserModel.js";

export async function GetAllUser(req: Request, res: Response) {
    try {
        const users = await User.find({});
        return res.status(200).json({ message: "Users fetched successfully", Users: users });
    } catch {
        return res.status(500).json({ message: "Internal server error" });
    };
};

export async function DeleteUser(req: Request, res: Response) {
    try {
        const { id } = req.body;
        await User.findByIdAndDelete(id);
        return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    };
};