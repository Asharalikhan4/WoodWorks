import { Model, Schema, model } from "mongoose";
import ProductDocument from "../types/ProductModelTypes.js";

const ProductSchema: Schema = new Schema<ProductDocument>({
    available: {
        type: Boolean,
        required: true
    },
    totalSales: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    img: [
        {
            type: String,
            required: true
        }
    ],
    description: {
        type: String,
        required: true
    },
    inStock: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    avaliableQuantity: {
        type: Number,
        required: true
    },
    flashSale: {
        active: {
            type: Boolean,
            required: true
        },
        discount: {
            type: Number,
            required: true
        },
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        }
    },
    ratings: [
        {
            type: Number
        }
    ]
}, {
    timestamps: true
});
const Product: Model<ProductDocument> = model<ProductDocument>("Product", ProductSchema);
export default Product;