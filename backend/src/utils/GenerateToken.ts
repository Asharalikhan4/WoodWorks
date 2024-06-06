import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

const GenerateToken = (userId: string, email: string): string => {
    const payload = { userId, email };
    const options = { expiresIn: '1h' };

    if (!config.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined");
    };

    return jwt.sign(payload, config?.JWT_SECRET, options);
};

export default GenerateToken;