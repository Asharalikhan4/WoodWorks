import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import HorizontalLine from "./HorizontalLine";

const ConnectWithUsOptions: string[] = ["Disclaimer", "Our Story", "About us", "Blog & News", "Contact us", "Sustainability"];
const InformationOptions: string[] = ["FAQs", "Shipping Policy", "Customise Order Policy", "Return/Refund Policy", "Maintain Your Furniture", "Terms of Use"];
const NavigationOptions: string[] = ["Privacy Policy", "Care & Instructions", "Franchisee", "International Shipping", "Gift Card"];

export default function Footer(): JSX.Element {
    return (
        <footer className="bg-[#121212] text-white space-y-4 py-6 md:py-8">
            <div className="mobileContainer space-y-4 md:space-y-0 md:flex md:justify-around">
                <div>
                    <h3 className="py-2 text-base text-[#ffffff] md:text-lg">Connect With Us</h3>
                    {
                        ConnectWithUsOptions?.map((option: string, index: number) => (
                            <div key={index} className="font-light py-2 text-[#ffffffbf] text-xs md:text-sm">{option}</div>
                        ))
                    }
                </div>
                <div>
                    <h3 className="py-2 text-base text-[#ffffff] md:text-lg">Information</h3>
                    {
                        InformationOptions?.map((option: string, index: number) => (
                            <div key={index} className="font-light py-2 text-[#ffffffbf] text-xs md:text-sm">{option}</div>
                        ))
                    }
                </div>
                <div>
                    <div className="py-2 text-base text-[#ffffff] md:text-lg">Navigation</div>
                    {
                        NavigationOptions?.map((option: string, index: number) => (
                            <div key={index} className="font-light py-2 text-[#ffffffbf] text-xs md:text-sm">{option}</div>
                        ))
                    }
                </div>
            </div>
            <div className="mobileContainer md:container md:mx-auto space-y-4 md:flex md:justify-between py-4 md:items-center">
                <div className="space-y-4">
                    <div className="md:text-lg">For inboxes with impeccable taste.</div>
                    <input type="email" placeholder="Email" className="bg-[#121212] text-[#949494] border px-4 py-1 w-full" />
                </div>
                <div className="flex justify-center gap-x-5 md:space-x-8">
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <FaPinterest />
                </div>
            </div>
            <HorizontalLine />
            <div className="text-center text-sm">
            © 2024, WoodWorks.
            </div>
        </footer>
    );
};