import React from "react";
import Navbar from "./Navbar";
import DropdownMenu from "./DropdownMenu";

export default function Header(): JSX.Element {
    return (
        <React.Fragment>
            <Navbar />
            <DropdownMenu />
        </React.Fragment>
    );
};