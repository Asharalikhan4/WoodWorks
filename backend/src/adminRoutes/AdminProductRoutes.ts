import express from "express";
import { CreateProduct, DeleteProduct, GetAllProducts, GetSingleProduct, UpdateProduct } from "../adminControllers/AdminProductControllers.js";
const router = express.Router();

router.post("/create-product", CreateProduct);
router.get("/all-products", GetAllProducts);
router.get("/single-product/:id", GetSingleProduct);
router.put("/update-product/:id", UpdateProduct);
router.delete("/delete-product/:id", DeleteProduct);

export default router;