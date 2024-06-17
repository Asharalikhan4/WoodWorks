import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserStateTypes } from "../types/userTypes";

const initialState: UserStateTypes = {
    name: "",
    email: "",
    isAdmin: false,
    address: {
        street: "",
        houseNumber: 0,
        zipCode: "",
        state: "",
        country: "",
        phoneNumber: "",
        additionalInfo: "",
    },
    cart: undefined,
    orders: undefined,
    wishlist: undefined,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserStateTypes>) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.isAdmin = action.payload.isAdmin;
            state.address = action.payload.address;
            state.cart = action.payload.cart;
            state.orders = action.payload.orders;
            state.wishlist = action.payload.wishlist;
        },
        logout: (state) => {
            state.name = "";
            state.email = "";
            state.isAdmin = false;
            state.address = undefined;
            state.cart = undefined;
            state.orders = undefined;
            state.wishlist = undefined;
        },
        updateCart: (state, action: PayloadAction<object>) => {
            state.cart?.push(action.payload);
        },
        removeCart: (state, action: PayloadAction<object>) => {
            state.cart = state.cart?.filter((item) => item !== action.payload);
        },
        updateOrders: (state, action: PayloadAction<object>) => {
            state.orders?.push(action.payload);
        },
        updateWishlist: (state, action: PayloadAction<object>) => {
            state.wishlist?.push(action.payload);
        },
    },
});

export const { login, logout, updateCart, removeCart, updateOrders, updateWishlist } = userSlice.actions;
export default userSlice.reducer;