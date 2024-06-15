import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Address {
    street: string;
    houseNumber?: number;
    zipCode: string;
    state: string;
    country: string;
    phoneNumber: string;
    additionalInfo?: string;
};

export interface UserState {
    name: string;
    email: string;
    isAdmin?: boolean;
    address?: Address;
    cart?: Array<string>;
    orders?: Array<string>;
    wishlist?: Array<string>;
};

const initialState: UserState = {
    name: "",
    email: "",
    isAdmin: false,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserState>) => {
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
        updateCart: (state, action: PayloadAction<string>) => {
            state.cart?.push(action.payload);
        },
        removeCart: (state, action: PayloadAction<string>) => {
            state.cart = state.cart?.filter((item) => item !== action.payload);
        },
        updateOrders: (state, action: PayloadAction<string>) => {
            state.orders?.push(action.payload);
        },
        updateWishlist: (state, action: PayloadAction<string>) => {
            state.wishlist?.push(action.payload);
        },
    },
});

export const { login, logout, updateCart, removeCart, updateOrders, updateWishlist } = userSlice.actions;
export default userSlice.reducer;