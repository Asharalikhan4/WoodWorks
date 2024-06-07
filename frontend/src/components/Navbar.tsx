import React from "react";
import { GoSearch } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";


export default function Navbar(): JSX.Element {

    const [searchOpen, setSearchOpen] = React.useState<boolean>(false);

    const toggleSearchBar = (): void => {
        setSearchOpen(!searchOpen);
    };

    return (
        <nav className="hidden md:container md:mx-auto md:flex md:justify-between md:text-2xl md:py-6">
            {
                searchOpen ? (
                    <React.Fragment>
                        <input type="email" placeholder="Search for products" className="border outline-none" />
                        <div onClick={toggleSearchBar} className="cursor-pointer text-2xl"><RxCross2 /></div>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <div className="text-2xl cursor-pointer" onClick={toggleSearchBar}><GoSearch /></div>
                        <Link to={"/"}>WoodWorks.</Link>
                        <div className="flex space-x-3">
                            <Link to={"/signin"} className="text-2xl"><FiUser /></Link>
                            <Link to={"/cart"} className="text-2xl"><BsCart3 /></Link>
                        </div>
                    </React.Fragment>
                )
            }
        </nav>
    );
};