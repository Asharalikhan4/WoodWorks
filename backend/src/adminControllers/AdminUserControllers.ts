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