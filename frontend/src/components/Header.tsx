import React from "react";
import Navbar from "./Navbar";
import DropdownMenu from "./DropdownMenu";
import NotificationBar from "./NotificationBar";

export default function Header(): JSX.Element {
    return (
        <React.Fragment>
            <NotificationBar />
            <Navbar />
            <DropdownMenu />
        </React.Fragment>
    );
};