import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import ProtectedRoute from "../utils/protectedRoutes";
import isAuthenticated from "../utils/isAuthenticated";
import Loading from "../components/Loading";

const Layout = lazy(() => import("../config/Layout"));
const HomePage = lazy(() => import("../pages/HomePage"));
const SigninPage = lazy(() => import("../pages/SigninPage"));
const SignupPage = lazy(() => import("../pages/SignupPage"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const CartPage = lazy(() => import("../pages/CartPage"));
const ReduxPage = lazy(() => import("../pages/ReduxPage"));
const ProductPage = lazy(() => import("../pages/ProductPage"));


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
        path: "/product/:id",
        element: <ProductPage />
      },
      {
        path: "/loading",
        element: <Loading />
      }
    ],
    errorElement: <ErrorPage />
  }
]);

export default router;
