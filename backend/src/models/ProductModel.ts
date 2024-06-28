import { Model, Schema, model } from "mongoose";
import ProductDocument from "../types/ProductModelTypes.js";

const ProductSchema: Schema = new Schema<ProductDocument>({
    available: {
        type: Boolean,
        required: true
    },
    totalSales: {
        type: Number,
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: [String],
        required: true
    },
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
        },
        discount: {
            type: Number,
        },
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        }
    },
    ratings: {
        type: Number
    },
    category: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

ProductSchema.pre<ProductDocument>("save", function (next) {
    if (this.isModified("category")) {
        this.category = this.category.toLowerCase().split(" ").join("-");
    }
    next();
});

const Product: Model<ProductDocument> = model<ProductDocument>("Product", ProductSchema);
export default Product;