import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import productsStateTypes from "../types/productsStateTypes";

interface InitialState {
  products: productsStateTypes[];
}

const initialState: InitialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProduct: (state, action: PayloadAction<productsStateTypes[]>) => {
      state.products = action.payload;
    },
  },
});

export const { updateProduct } = productSlice.actions;
export default productSlice.reducer;
