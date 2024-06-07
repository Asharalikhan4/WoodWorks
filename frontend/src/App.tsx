import React from "react";
import NotificationBar from "./components/NotificationBar";
import Navbar from "./components/Navbar";
import DropdownMenu from "./components/DropdownMenu";

export default function App(): JSX.Element {
    return (
        <div className="text-4xl">
            <NotificationBar />
            <Navbar />
            <DropdownMenu />
            <h1>Hello, World!</h1>
        </div>
    );
};