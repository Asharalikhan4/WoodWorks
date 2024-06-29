import { config } from "./config/config.js";
import express, { Request, Response } from "express";
import cors from "cors";
const app = express();

// Database Connection
import DatabaseConnection from "./config/DatabaseConnection.js";

// User Routes
import UserAuthRoutes from "./userRoutes/UserAuthRoutes.js";
import UserProductRoutes from "./userRoutes/UserProductRoutes.js"

// Admin Routes
import AdminUserRoutes from "./adminRoutes/AdminUserRoutes.js";
import AdminProductRoutes from "./adminRoutes/AdminProductRoutes.js";
import AdminAuthRoutes from "./adminRoutes/AdminAuthRoutes.js";

// Middlewares
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:1234',
}));

// Routes
app.get("/", (req: Request, res: Response) => {
    res.send("WoodWorks Api Working Fine!");
});
app.use("/api/v1/user", UserAuthRoutes);
app.use("/api/v1/user/product", UserProductRoutes);
app.use("/api/v1/admin/user", AdminUserRoutes);
app.use("/api/v1/admin/product", AdminProductRoutes);
app.use("/api/v1/admin/auth", AdminAuthRoutes);

app.listen(config.PORT, (): void => {
    DatabaseConnection();
    console.log(`Server is up at ${config.PORT}`);
});