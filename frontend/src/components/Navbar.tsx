import React, { useState } from "react";
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
                            <div onClick={handleMenuClick}>
                                {
                                    mobileMenu ? <RxCross2 /> : <RxHamburgerMenu />
                                }
                            </div>
                            <Link to={"/"}>WoodWorks.</Link>
                            <div className="flex space-x-2">
                                <div className="cursor-pointer" onClick={toggleMobileSearchBar}><GoSearch /></div>
                                <Link to={"/cart"}><BsCart3 /></Link>
                            </div>
                        </div>
                    )
                }
            </div>

            {
                mobileMenu ? (
                    <div className="h-svh px-6 space-y-4 py-6 text-lg">
                        {
                            NavbarMenuItems?.map((item: string, index: number) => (
                                <div key={index} className="flex items-center cursor-pointer hover:underline">{item}</div>
                            ))
                        }
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
                                            <Link to={"/user-profile"} onClick={handleSignin} className="text-xl">{user.split(" ")[0]}</Link>
                                            {isDropdownVisible && (
                                                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                                                    <ul>
                                                        <li className="p-2 hover:bg-gray-200">Option 1</li>
                                                        <li className="p-2 hover:bg-gray-200">Option 2</li>
                                                        <li className="p-2 hover:bg-gray-200">Option 3</li>
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



//  <nav class="bg-gray-800">
//   <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div class="flex items-center justify-between h-16">
//       <div class="flex items-center">
//         <a href="#" class="flex-shrink-0">
//           <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
//         </a>
//         <div class="hidden md:block">
//           <div class="ml-10 flex items-baseline space-x-4">
//             <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
//             <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
//             <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
//             <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
//           </div>
//         </div>
//       </div>
//       <div class="md:hidden">
//         <!-- Mobile menu button -->
//         <button type="button" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
//           <span class="sr-only">Open main menu</span>
//           <!-- Icon when menu is closed -->
//           <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//           <!-- Icon when menu is open -->
//           <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   </div>

//   <!-- Mobile menu, show/hide based on menu state. -->
//   <div class="md:hidden" id="mobile-menu">
//     <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//       <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
//       <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
//       <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
//       <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
//     </div>
//   </div>
// </nav>