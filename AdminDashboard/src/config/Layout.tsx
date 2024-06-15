import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const links = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about-us' },
    { label: 'Contact', path: '/contact-us' },
    { label: "Users", path: "/users"}
];

export default function Layout(): JSX.Element {
    return (
        <div className="flex h-screen">
            <Sidebar links={links} />
            <Outlet />
        </div>
    );
};