import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

export default function TokenVerification(req: Request, res: Response, next: NextFunction){
    try {
        const token: string = req.header("Authorization")?.replace("Bearer ", "") as string;
        if (!token) return res.status(401).json({ message: "You're not authorized." });

        const verified: string | object = jwt.verify(token, config?.JWT_SECRET as string);
        if (!verified) return res.status(401).json({ message: "You're not authorized." });

        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    };
};