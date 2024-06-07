import React from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const DropdownMenuItems: string[] = ["Living Room", "Bedroom", "Cabinetry", "Dining & Kitchen", "Seating", "LKH Collection", "Home Essentials"];

export default function DropdownMenu(): JSX.Element {
    return (
        <div className="hidden md:container md:mx-auto md:px-44 md:flex md:text-sm md:justify-around">
            {
                DropdownMenuItems?.map((item: string, index: number) => (
                        <div key={index} className="flex items-center cursor-pointer hover:underline">{item}<MdKeyboardArrowDown className="text-xl" /></div>
                ))
            }
        </div>
    );
};