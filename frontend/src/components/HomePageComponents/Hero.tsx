import React from "react";

export default function Hero(): JSX.Element {
    return (
        <div className="bg-[url('https://www.lakkadhaara.com/cdn/shop/files/Ahmedabad-home-Green-Squares-Design-photos-5-2.jpg?v=1690457564&width=3840')] bg-cover bg-center bg-no-repeat h-[36rem] md:h-[36rem] flex items-center justify-center">
            <div className="text-center bg-black w-full h-full opacity-50 flex items-center justify-center">
                <div className="text-white space-y-4">
                    <div className="text-xl md:text-2xl">HANDCRAFTED LUXURY</div>
                    <div className="text-xs md:text-xs">TIMELESS PIECES THAT COMPLEMENT DAILY ROUTINES AND LAST GENERATIONS.</div>
                    <button className="border-2 px-7 py-2">Shop All</button>
                </div>
            </div>
        </div>
    );
};