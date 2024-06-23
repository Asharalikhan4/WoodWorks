import React, { Suspense, lazy } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Loading from "../components/Loading";

const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));

export default function Layout() {

    const location = useLocation();
    const lastPathSegment = location?.pathname.split('/').pop();

    return (
        <Suspense fallback={<Loading />}>
            <Header />
            <Outlet />
            {
                lastPathSegment !== "signin" && lastPathSegment !== "signup" && lastPathSegment !== "redux" ? <Footer /> : null
            }
        </Suspense>
    );
};