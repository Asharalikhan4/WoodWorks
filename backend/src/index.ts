import { config } from "./config/config.js";
import express, { Request, Response } from "express";
import cors from "cors";
const app = express();

// Routes
import UserRoutes from "./routes/UserRoutes.js";
import DatabaseConnection from "./config/DatabaseConnection.js";

// Middlewares
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:1234',
}));

app.get("/", (req: Request, res: Response) => {
    res.send("WoodWorks Api Working Fine!");
});
app.use("/api/v1/user", UserRoutes);

app.listen(config.PORT, (): void => {
    DatabaseConnection();
    console.log(`Server is up at ${config.PORT}`);
});