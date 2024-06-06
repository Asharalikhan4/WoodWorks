import mongoose, { Document } from "mongoose";

interface Address extends Document {
    street: string;
    houseNumber?: number;
    zipCode: string;
    state: string;
    country: string;
    phoneNumber: string;
    additionalInfo?: string;
};

export default interface UserDocument extends Document {
    name: string;
    email: string;
    password: string;
    isAdmin?: boolean;
    address?: Address;
    token?: string;
    tokenExpiration?: Date;
    cart?: mongoose.Schema.Types.ObjectId[];
    orders?: mongoose.Schema.Types.ObjectId[];
    wishlist?: mongoose.Schema.Types.ObjectId[];
};