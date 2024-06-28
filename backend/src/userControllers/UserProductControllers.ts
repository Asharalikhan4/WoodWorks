import { Request, Response } from "express";
import Product from "../models/ProductModel.js";

export async function GetAllProducts(req: Request, res: Response) {
    try {
        const products = await Product.find({});
        return res.status(200).json({ products: products });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", Error: error });
    };
};