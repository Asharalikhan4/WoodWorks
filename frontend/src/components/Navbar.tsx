import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { GoSearch } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarMenuItems: string[] = ["Living Room", "Bedroom", "Cabinetry", "Dining & Kitchen", "Seating", "LKH Collection", "Home Essentials"];

export default function Navbar(): JSX.Element {

    const [searchOpen, setSearchOpen] = useState<boolean>(false);
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);
    const [mobileSearch, setMobileSearch] = useState<boolean>(false);
    const [signin, setSignin] = useState<boolean>(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

    const user = useSelector((state: any) => state.user.name);

    const toggleSearchBar = (): void => {
        setSearchOpen(!searchOpen);
    };

    const toggleMobileSearchBar = (): void => {
        setMobileSearch(!mobileSearch);
    }

    const handleMenuClick = () => {
        setMobileMenu(!mobileMenu);
    };

    const handleSignin = () => {
        setSignin(!signin);
    };

    const handleMouseEnter = () => {
        setIsDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownVisible(false);
    };

    const handleLogout = () => {
        console.log("Logging out...");
        Cookies.remove("jwt_token");
        window.location.reload();
    };

    const closeSideMenu = () => {
        setMobileMenu(false);
    }

    return (
        <nav>
            {/* Mobile Navbar */}
            <div className="mobileContainer py-2 md:hiddden lg:hidden">
                {
                    mobileSearch ? (
                        <div className="flex items-center gap-x-2">
                            <input type="text" placeholder="Search for products" className="border outline-none w-full py-1 px-2" />
                            <div className="cursor-pointer" onClick={toggleMobileSearchBar}><RxCross2 className="text-2xl" /></div>
                        </div>
                    ) : (
                        <div className=" bg-white flex justify-between text-black md:hidden lg:hidden items-center text-xl">
                            <div onClick={handleMenuClick} className="w-24 flex items-center justify-start">
                                {
                                    mobileMenu ? <RxCross2 /> : <RxHamburgerMenu />
                                }
                            </div>
                            <Link className="font-semibold" to={"/"}>WoodWorks.</Link>
                            <div className="w-24 flex items-center justify-end space-x-3">
                                <div className="cursor-pointer" onClick={toggleMobileSearchBar}><GoSearch /></div>
                                <Link to={"/cart"}><BsCart3 /></Link>
                            </div>
                        </div>
                    )
                }
            </div>

            {
                mobileMenu ? (
                    <div className="flex flex-col min-h-[calc(100vh-8rem)] max-h-[calc(100vh-8rem)] px-6 py-6 text-lg overflow-y-auto">
                        <div className="flex-grow space-y-4">
                            {
                                NavbarMenuItems?.map((item: string, index: number) => (
                                    <div key={index} className="flex items-center cursor-pointer hover:underline" onClick={closeSideMenu}>{item}</div>
                                ))
                            }
                        </div>
                        <div className="mt-auto pt-4">
                            <Link to={"/signin"} onClick={closeSideMenu} className="text-xl flex items-center gap-x-2">
                                <FiUser />
                                Sign in
                            </Link>
                        </div>
                    </div>
                ) : (
                    <></>
                )
            }

            {/* Tablet and Laptop Navbar */}
            <div className="hidden md:container md:mx-auto md:flex md:justify-between md:items-center md:text-2xl md:py-6">
                {
                    searchOpen ? (
                        <React.Fragment>
                            <input type="email" placeholder="Search for products" className="border outline-none" />
                            <div onClick={toggleSearchBar} className="cursor-pointer text-2xl"><RxCross2 /></div>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <div className="cursor-pointer w-24 flex items-center justify-start" onClick={toggleSearchBar}><GoSearch /></div>
                            <Link className="" to={"/"}>WoodWorks.</Link>
                            <div className="w-24 flex items-center justify-end space-x-4">
                                <Link to={"/cart"}><BsCart3 /></Link>
                                {
                                    user ? (
                                        <div className="relative"
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}>
                                            <div onClick={handleSignin} className="text-xl cursor-pointer">{user.split(" ")[0]}</div>
                                            {isDropdownVisible && (
                                                <div className="absolute top-5 left-5 right-0 mt-2 w-48 bg-white text-black shadow-lg text-lg cursor-pointer rounded-md">
                                                    <ul>
                                                        <Link to={"/user-profile"} className="p-2">Profile</Link>
                                                        <li className="p-2" onClick={handleLogout}>Logout</li>
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link to={"/signin"} onClick={handleSignin}><FiUser /></Link>
                                    )
                                }
                            </div>
                        </React.Fragment>
                    )
                }
            </div>
        </nav>
    );
};