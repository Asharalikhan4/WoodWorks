import React, { Fragment } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout() {

    const location = useLocation();
    const lastPathSegment = location?.pathname.split('/').pop();

    return (
        <Fragment>
            <Header />
            <Outlet />
            {
                lastPathSegment !== "signin" && lastPathSegment !== "signup" && lastPathSegment !== "redux" ? <Footer /> : null
            }
        </Fragment>
    );
};