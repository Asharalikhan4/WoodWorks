import React from "react";
import ProductList from "../components/ProductList";
import MadeInIndia from "../components/HomePageComponents/MadeInIndia";
import MadeToOrder from "../components/HomePageComponents/MadeToOrder";
import BeInspired from "../components/HomePageComponents/BeInspired";
import Accordion from "../components/HomePageComponents/Accordion";

export default function HomePage(): JSX.Element {
    return (
        <div>
            <MadeInIndia />
            <ProductList heading="New Arrival" className="bg-[#121212] text-[#ffffff]" />
            <MadeToOrder />
            <ProductList heading="Shop Bestsellers" subHeading="OUR GREATEST HITS" className="bg-[#121212] text-[#ffffff]" />
            <ProductList heading="Sofa Collection" className="bg-[#ffffff] text-[#121212]" />
            <BeInspired />
            <ProductList heading="Marwari Antique Collection" className="bg-[#121212] text-[#ffffff]" />
            <ProductList heading="Bowls & Boards" className="bg-[#121212] text-[#ffffff]" />
        </div>
    );
};