import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import router from "./router/Routes";
import fetchUserData from "./utils/fetchUserData";
import fetchAllProducts from "./api/fetchAllProducts";
import { login  } from "./redux/userSlice";
import { updateProduct } from "./redux/productSlice";

export default function App(): JSX.Element {

    const dispatch = useDispatch();

    const userData = async () => {
        const userData = await fetchUserData();
        if (userData?.User) {
            dispatch(login(userData.User));
        }
        const products = await fetchAllProducts();
        dispatch(updateProduct(products));
    }

    useEffect(() => {
        userData();
    });

    return (
        <>
            <RouterProvider router={router} />
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                toastOptions={{
                    duration: 4000,
                }}
            />
        </>
    );
};