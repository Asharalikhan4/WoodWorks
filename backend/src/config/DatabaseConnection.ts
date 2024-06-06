import mongoose, { ConnectOptions } from "mongoose";
import { config } from "./config.js";

export default async function DatabaseConnection(): Promise<void> {
    try {
        const options: ConnectOptions = {};

        if(!config.MONGODB_URL){
            throw new Error('MONGODB_URL environment variable is not defined');
        };

        const response = await mongoose.connect(config.MONGODB_URL, options);
        console.log('MongoDB connection established:', response.connections[0].name);
    } catch (error) {
        console.error("Database connection error", error);
        process.exit(1);
    }
};