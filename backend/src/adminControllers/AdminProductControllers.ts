import { Request, Response } from "express";
import Product from "../models/ProductModel.js";

export async function CreateProduct(req: Request, res:Response) {
    try {
        const {available, title, img, description, inStock, price, avaliableQuantity, flashSale, ratings, category} = req.body;
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
            ratings,
            category
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

export async function GetSingleProduct(req: Request, res: Response) {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        };
        return res.status(200).json({ Product: product });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", Error: error });
    };
};

export async function UpdateProduct(req: Request, res: Response) {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        };
        const {available, title, img, description, inStock, price, avaliableQuantity, flashSale, ratings, category} = req.body;
        if (available) {
            product.available = available;
        };
        if (title) {
            product.title = title;
        };
        if (img) {
            product.img = img;
        };
        if (description) {
            product.description = description;
        };
        if (inStock) {
            product.inStock = inStock;
        };
        if (price) {
            product.price = price;
        };
        if (avaliableQuantity) {
            product.avaliableQuantity = avaliableQuantity;
        };
        if (flashSale) {
            product.flashSale = flashSale;
        };
        if (ratings) {
            product.ratings = ratings;
        };
        if (category) {
            product.category = category;
        }
        await product.save();
        return res.status(200).json({ message: "Product Updated Successfully", Product: product });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", Error: error });
    };
};

export async function DeleteProduct(req: Request, res: Response) {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        };
        await product.deleteOne();
        return res.status(200).json({ message: "Product Deleted Successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", Error: error });
    };
};