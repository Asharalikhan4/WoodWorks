import React from "react";

export default function BeInspired(): JSX.Element {
    return (
        <div className="mobileContainer grid grid-cols-1 md:grid-cols-2 md:container md:mx-auto py-6">
            <div>
                <img src="https://www.lakkadhaara.com/cdn/shop/files/New_Project-16.png?v=1688880212&width=1070" className="h-80% w-80%" alt="product image" />
            </div>
            <div className="text-center bg-[#F3F3F3] space-y-6 p-10 md:flex md:flex-col md:items-center md:justify-center">
                <div className="text-3xl text-[#121212] lg:text-[40px]">BE INSPIRED</div>
                <div className="text-sm text-[#121212bf] lg:text-base">BY OUR MOST COVETED ARTICLES.</div>
                <button className="bg-black text-white px-6 py-2 mt-4 transition-all duration-300 ease-in-out transform hover:scale-90">Shop Now</button>
            </div>
        </div>
    );
};