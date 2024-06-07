import React from "react";
import { GoSearch } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";


export default function Navbar(): JSX.Element {
    return (
        <nav className="hidden md:container md:mx-auto md:flex md:justify-between md:text-2xl md:py-2">
            <div><GoSearch /></div>
            <Link to={"/"}>WoodWorks</Link>
            <div className="flex">
                <Link to={"/signin"}><CiUser /></Link>
                <div><BsCart3 /></div>
            </div>
        </nav>
    );
};