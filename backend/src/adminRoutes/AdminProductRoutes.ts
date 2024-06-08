import express from "express";
import { CreateProduct } from "../adminControllers/AdminProductControllers.js";
const router = express.Router();

router.post("/create-product", CreateProduct);

export default router;