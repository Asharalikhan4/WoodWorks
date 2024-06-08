import { Request, Response } from "express";
import Product from "../models/ProductModel.js";

export async function CreateProduct(req: Request, res:Response) {
    try {
        const {available, title, img, description, inStock, price, avaliableQuantity, flashSale, ratings} = req.body;
        if (!available || !title || !img || !description || !inStock || !price || !avaliableQuantity || !ratings) {
            return res.status(400).json({ message: "All fields are required" });
        };
        const product = await Product.create({
            available, 
            title, 
            img, 
            description, 
            inStock, 
            price, 
            avaliableQuantity, 
            flashSale, 
            ratings
        });
        await product.save();
        return res.status(201).json({ message: "Product Created Successfully", Product: product });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", Error: error });
    };
};

export async function GetAllProducts(req: Request, res: Response) {
    try {
        const products = await Product.find({});
        return res.status(200).json({ Products: products });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", Error: error });
    };
};