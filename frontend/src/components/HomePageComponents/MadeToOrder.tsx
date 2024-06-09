import React from "react";

export default function MadeToOrder(): JSX.Element {
    return (
        <div className="lg:container lg:mx-auto lg:flex">
            <div>
                <img src="https://www.lakkadhaara.com/cdn/shop/files/Made_To_Order.png?v=17056" alt="Made To Order image" />
            </div>
            <div className="lg:flex lg:flex-col lg:justify-center lg:gap-y-8 lg:text-center ">
                <div className="text-[40px] text-[#121212]">Made To Order</div>
                <div className="lg:text-base text-[#121212bf]">Dream it and we'll bring it to life for you. Want the perfect <br /> coffee table or sofa, made <span className="italic">just for you?</span> </div>
                <div className="lg:text-base text-[#121212bf]">With custom design and detailed craftsmanship, we can craft a <br /> bespoke piece, exactly the way you want it.</div>
            </div>
        </div>
    );
};