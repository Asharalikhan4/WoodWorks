import { config } from "./src/config/config.js";
import express, { Request, Response } from "express";
import cors from "cors";
const app = express();

// Database Connection
import DatabaseConnection from "./src/config/DatabaseConnection.js";

// User Routes
import UserAuthRoutes from "./src/userRoutes/UserAuthRoutes.js";
import UserProductRoutes from "./src/userRoutes/UserProductRoutes.js"

// Admin Routes
import AdminUserRoutes from "./src/adminRoutes/AdminUserRoutes.js";
import AdminProductRoutes from "./src/adminRoutes/AdminProductRoutes.js";
import AdminAuthRoutes from "./src/adminRoutes/AdminAuthRoutes.js";

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

(async () => {
    try {
        await DatabaseConnection();
        
        app.listen(config.PORT, () => {
            console.log(`Server is running on port: ${config.PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server', error);
    }
})();