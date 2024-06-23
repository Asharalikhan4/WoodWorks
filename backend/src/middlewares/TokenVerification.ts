import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

interface AuthRequest extends Request {
    user?: {
        userId: string;
    };
}

export default function TokenVerification(req: AuthRequest, res: Response, next: NextFunction) {
    try {
        const token: string = req.header("Authorization")?.replace("Bearer ", "") as string;
        if (!token) return res.status(401).json({ message: "You're not authorized." });

        const verified: string | object = jwt.verify(token, config?.JWT_SECRET as string);
        if (!verified) return res.status(401).json({ message: "You're not authorized." });

        const decoded = jwt.verify(token, config?.JWT_SECRET as string) as { userId: string };
        req.user = { userId: decoded.userId };

        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    };
};