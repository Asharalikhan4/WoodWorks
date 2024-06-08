import mongoose, { Schema, Model, model } from "mongoose";
import UserDocument from "../types/UserModelTypes.js";

const UserSchema: Schema = new Schema<UserDocument>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    address: {
        type: String
    },
    token: {
        type: String
    },
    tokenExpiration: {
        type: Date
    },
    cart: [
        { 
            type: mongoose.Schema.Types.ObjectId 
        }
    ],
    orders: [
        { 
            type: mongoose.Schema.Types.ObjectId 
        }
    ],
    wishlist: [
        { 
            type: mongoose.Schema.Types.ObjectId 
        }
    ],
}, {
    timestamps: true
});

const User: Model<UserDocument> = model<UserDocument>("User", UserSchema);
export default User;