import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout() {

    const location = useLocation();
    const lastPathSegment = location?.pathname.split('/').pop();

    return (
        <div>
            <Header />
            <Outlet />
            {
                lastPathSegment !== "signin" && lastPathSegment !== "signup" ? <Footer /> : null
            }
        </div>
    );
};