import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../config/Layout";
import ErrorPage from "../pages/ErrorPage";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/signin",
        element: <Signin />
      },
      {
        path: "/signup",
        element: <Signup />
      }
    ],
    errorElement: <ErrorPage />
  }
]);

export default router;
