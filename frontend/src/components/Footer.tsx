import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

const ConnectWithUsOptions: string[] = ["Disclaimer", "Our Story", "About us", "Blog & News", "Contact us", "Sustainability"];
const InformationOptions: string[] = ["FAQs", "Shipping Policy", "Customise Order Policy", "Return/Refund Policy", "Maintain Your Furniture", "Terms of Use"];
const NavigationOptions: string[] = ["Privacy Policy", "Care & Instructions", "Franchisee", "International Shipping", "Gift Card"];

export default function Footer(): JSX.Element {
    return (
        <footer className="bg-[#121212] text-white">
            <div className="md:flex md:justify-around">
                <div>
                    <h3 className="py-2">Connect With Us</h3>
                    {
                        ConnectWithUsOptions?.map((option: string, index: number) => (
                            <div key={index} className="font-light py-2">{option}</div>
                        ))
                    }
                </div>
                <div>
                    <h3 className="py-2">Information</h3>
                    {
                        InformationOptions?.map((option: string, index: number) => (
                            <div key={index} className="font-light py-2">{option}</div>
                        ))
                    }
                </div>
                <div>
                    <div className="py-2">Navigation</div>
                    {
                        NavigationOptions?.map((option: string, index: number) => (
                            <div key={index} className="font-light py-2">{option}</div>
                        ))
                    }
                </div>
            </div>
            <div className="md:flex md:justify-between px-40 py-4 md:items-center">
                <div>
                    <div>For inboxes with impeccable taste.</div>
                    <input type="email" placeholder="Email" className="bg-[#121212] text-[#949494] border px-4 py-1 mt-4 rounded-lg" />
                </div>
                <div className="flex space-x-8">
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <FaPinterest />
                </div>
            </div>
        </footer>
    );
};