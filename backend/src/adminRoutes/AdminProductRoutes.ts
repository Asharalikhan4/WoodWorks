import express from "express";
import { CreateProduct, GetAllProducts } from "../adminControllers/AdminProductControllers.js";
const router = express.Router();

router.post("/create-product", CreateProduct);
router.get("/all-products", GetAllProducts);

export default router;