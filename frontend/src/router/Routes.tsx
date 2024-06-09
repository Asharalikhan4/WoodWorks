import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../config/Layout";
import ErrorPage from "../pages/ErrorPage";
import SigninPage from "../pages/SigninPage";
import SignupPage from "../pages/SignupPage";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/signin",
        element: <SigninPage />
      },
      {
        path: "/signup",
        element: <SignupPage />
      },
      {
        path: "/cart",
        element: <CartPage />
      }
    ],
    errorElement: <ErrorPage />
  }
]);

export default router;
