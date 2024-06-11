import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";
import Layout from "../config/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/about-us",
                element: <AboutUsPage />,
            },
            {
                path: "/contact-us",
                element: <ContactUsPage />,
            }
        ]
    }
]);

export default router;