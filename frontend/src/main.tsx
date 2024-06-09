import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import store from "./redux/store";
import { Provider } from "react-redux";
import router from "./router/Routes";

const container: HTMLElement = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                toastOptions={{
                    duration: 4000,
                }}
            />
        </Provider>
    </React.StrictMode>
);