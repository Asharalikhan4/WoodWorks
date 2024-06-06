import mongoose, { Schema, Model, model } from "mongoose";
import UserDocument from "../types/UserModalTypes.js";

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

const User: Model<any> = model("User", UserSchema);
export default User;