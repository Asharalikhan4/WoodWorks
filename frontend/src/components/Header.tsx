import React from "react";
import Navbar from "./Navbar";
import DropdownMenu from "./DropdownMenu";
import NotificationBar from "./NotificationBar";
import HorizontalLine from "./HorizontalLine";

export default function Header(): JSX.Element {
    return (
        <React.Fragment>
            <NotificationBar />
            <Navbar />
            <DropdownMenu />
            <HorizontalLine />
        </React.Fragment>
    );
};