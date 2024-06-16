import React from "react";

export default function MadeToOrder(): JSX.Element {
    return (
        <div className="mobileContainer py-6 md:container md:mx-auto md:flex">
            <div>
                <img src="https://www.lakkadhaara.com/cdn/shop/files/Made_To_Order.png?v=17056" alt="Made To Order image" />
            </div>
            <div className="text-center space-y-4 md:flex md:flex-col md:justify-center md:gap-y-6">
                <div className="text-3xl md:text-[40px] text-[#121212]">Made To Order</div>
                <div className="text-sm md:text-base text-[#121212bf]">Dream it and we'll bring it to life for you. Want the perfect <br />coffee table or sofa, made <span className="italic">just for you?</span> </div>
                <div className="text-sm md:text-base text-[#121212bf]">With custom design and detailed craftsmanship, we can craft <br />a bespoke piece, exactly the way you want it.</div>
                <button className="bg-black text-white py-2 px-4 transition-all duration-300 ease-in-out transform hover:scale-90">Consult With Our Designer</button>
            </div>
        </div>
    );
};