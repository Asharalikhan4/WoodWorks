import express from "express";
const router = express.Router();

import { GetAllProducts } from "../userControllers/UserProductControllers.js";

router.get("/all-products", GetAllProducts);

export default router;