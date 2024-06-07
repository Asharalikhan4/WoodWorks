import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

const ConnectWithUsOptions: string[] = ["Disclaimer", "Our Story", "About us", "Blog & News", "Contact us", "Sustainability"];
const InformationOptions: string[] = ["FAQs", "Shipping Policy", "Customise Order Policy", "Return/Refund Policy", "Maintain Your Furniture", "Terms of Use"];
const NavigationOptions: string[] = ["Privacy Policy", "Care & Instructions", "Franchisee", "International Shipping", "Gift Card"];

export default function Footer(): JSX.Element {
    return (
        <footer className="bg-[#121212] text-white h-[100vh]">
            <div className="flex">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
            <div className="md:flex md:justify-around md:items-center">
                <div>
                    <div>For inboxes with impeccable taste.</div>
                    <input type="email" placeholder="Email" className="bg-[#121212] text-[#949494] border px-4 py-1" />
                </div>
                <div className="flex space-x-5">
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <FaPinterest />
                </div>
            </div>
        </footer>
    );
};