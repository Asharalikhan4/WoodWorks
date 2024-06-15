import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../config/Layout";
import ErrorPage from "../pages/ErrorPage";
import SigninPage from "../pages/SigninPage";
import SignupPage from "../pages/SignupPage";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import ReduxPage from "../pages/ReduxPage";
import ProtectedRoute from "../utils/protectedRoutes";
import isAuthenticated from "../utils/isAuthenticated";

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
        element: (
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <CartPage />
          </ProtectedRoute>
        )
      },
      {
        path: "/redux",
        element: (
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <ReduxPage />
          </ProtectedRoute>
        )
      }
    ],
    errorElement: <ErrorPage />
  }
]);

export default router;
