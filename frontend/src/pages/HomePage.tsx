import React from "react";
import ProductList from "../components/ProductList";

export default function HomePage(): JSX.Element {
    return (
        <div>
            Home Page
            <ProductList heading="New Arrival" className="bg-[#121212] text-[#ffffff]" />
            <ProductList heading="Shop Bestsellers" subHeading="OUR GREATEST HITS" className="bg-[#121212] text-[#ffffff]" />
            <ProductList heading="Sofa Collection" className="bg-[#ffffff] text-[#121212]" />
            <ProductList heading="Marwari Antique Collection" className="bg-[#121212] text-[#ffffff]" />
            <ProductList heading="Bowls & Boards" className="bg-[#121212] text-[#ffffff]" />
        </div>
    );
};