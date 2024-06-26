import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";
import Layout from "../config/Layout";
import ErrorPage from "../pages/ErrorPage";
import SigninPage from "../pages/SigninPage";
import SignupPage from "../pages/SignupPage";
import isAuthenticated from "../utils/isAuthenticated";
import ProtectedRoute from "../utils/protectedRoute";
import UsersPage from "../pages/UsersPage";
import AddProductPage from "../pages/AddProductPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: (
                    <ProtectedRoute isAuthenticated={isAuthenticated()}>
                        <HomePage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/about-us",
                element: (
                    <ProtectedRoute isAuthenticated={isAuthenticated()}>
                        <AboutUsPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/contact-us",
                element: (
                    <ProtectedRoute isAuthenticated={isAuthenticated()}>
                        <ContactUsPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/users",
                element: (
                    <ProtectedRoute isAuthenticated={isAuthenticated()}>
                        <UsersPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/add-product",
                element: <AddProductPage />,
            }
        ],
        errorElement: <ErrorPage />,
    },
    {
        path: "/signin",
        element: isAuthenticated() ? <Navigate to={"/"} /> : <SigninPage />,
    },
    {
        path: "/signup",
        element: isAuthenticated() ? <Navigate to={"/"} /> : <SignupPage />,
    }
]);

export default router;