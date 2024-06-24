import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "../utils/protectedRoutes";
import isAuthenticated from "../utils/isAuthenticated";

const Layout = lazy(() => import("../config/Layout"));
const HomePage = lazy(() => import("../pages/HomePage"));
const SigninPage = lazy(() => import("../pages/SigninPage"));
const SignupPage = lazy(() => import("../pages/SignupPage"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const CartPage = lazy(() => import("../pages/CartPage"));
const ReduxPage = lazy(() => import("../pages/ReduxPage"));
const ProductPage = lazy(() => import("../pages/ProductPage"));
const ContactUsPage = lazy(() => import("../pages/ContactUsPage"));
const UserProfilePage = lazy(() => import("../pages/UserProfilePage"));


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
      },
      {
        path: "/redux",
        element: (
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <ReduxPage />
          </ProtectedRoute>
        )
      },
      {
        path: "/product/:name",
        element: <ProductPage />
      },
      {
        path: "/contact-us",
        element: <ContactUsPage />
      },
      {
        path: "/user-profile",
        element: (
          <ProtectedRoute isAuthenticated={isAuthenticated()}>
            <UserProfilePage />
          </ProtectedRoute>
        )
      }
    ],
    errorElement: <ErrorPage />
  }
]);

export default router;
