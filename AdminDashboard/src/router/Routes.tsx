import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";
import Layout from "../config/Layout";
import Users from "../pages/Users";
import ErrorPage from "../pages/ErrorPage";

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
            },
            {
                path: "/users",
                element: <Users />,
            }
        ],
        errorElement: <ErrorPage />
    }
]);

export default router;