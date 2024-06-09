import React from "react";

export default function BeInspired(): JSX.Element {
    return (
        <div className="lg:container lg:mx-auto lg:flex my-8">
            <div className="lg:flex-1 lg:bg-[#F3F3F3] lg:flex lg:flex-col lg:items-center lg:justify-center lg:text-center gap-y-6">
                <div className="lg:text-[40px] lg:text-[#121212]">BE INSPIRED</div>
                <div className="lg:text-[#121212bf] lg:text-base">BY OUR MOST COVETED ARTICLES.</div>
                <button className="bg-black text-white px-4 py-2 mt-4">Shop Now</button>
            </div>
            <div className="lg:flex-1">
                <img src="https://www.lakkadhaara.com/cdn/shop/files/New_Project-16.png?v=1688880212&width=1070" className="h-80% w-80%" alt="product image" />
            </div>
        </div>
    );
};