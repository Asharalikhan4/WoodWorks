import { Document } from "mongoose";

interface FlashSale {
    active: boolean;
    discount: number;
    startDate: Date | undefined;
    endDate: Date | undefined;
}
export default interface ProductDocument extends Document {
    available: boolean;
    totalSales?: number;
    title: string;
    img: Array<string>;
    description: string;
    inStock: number;
    price: number;
    avaliableQuantity: number;
    flashSale?: FlashSale;
    ratings: number;
    category: string;
}