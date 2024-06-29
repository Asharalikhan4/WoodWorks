import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { CiFilter } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import ProductCard from "../components/ProductCard";
import DropdownInput from "../components/DropDownInput";
import convertToTitleCase from "../utils/convertToTitleCase";

interface CollectionPageParams {
    name: string;
    [key: string]: string | undefined;
}

export default function CollectionsPage(): JSX.Element {

    const options = ["Featured", "Best Selling", 'Option 3'];

    const handleSelect = (value: string) => {
        console.log('Selected:', value);
    };

    const [selectedOption, setSelectedOption] = useState<string>(options[0]);

    const { name } = useParams<CollectionPageParams>();
    const collectionName: string = decodeURIComponent(name ?? "");

    const heading = convertToTitleCase(collectionName);

    const productsData = useSelector((state: any) => state.products.products?.products)?.filter(product => product?.category === collectionName);
    const productsCount = productsData?.length;

    return (
        <>
            <div className="text-center bg-[#F3F3F3] h-14 text-2xl text-[#121212] flex items-center justify-center md:h-20 md:text-4xl">{heading}</div>
            <div className="mobileContainer md:container mx-auto">
                <div className="flex justify-between items-center lg:hidden">
                    <div className="flex justify-center items-center gap-x-1 py-2"><CiFilter />Filter and Sort</div>
                    <div>173 products</div>
                </div>
                <div className="hidden lg:flex lg:justify-between py-2">
                    <div className="lg:flex lg:gap-x-4">
                        <div>Filter:</div>
                        <div className="lg:flex lf:justify-center lg:items-center hover:underline cursor-pointer">Availbility<MdKeyboardArrowDown className="text-xl" /></div>
                        <div className="lg:flex lf:justify-center lg:items-center hover:underline cursor-pointer">Price<MdKeyboardArrowDown className="text-xl" /></div>
                    </div>
                    <div className="lg:flex lg:gap-x-4">
                        <div>Sort by:</div>
                        <div>
                            <DropdownInput options={options} onSelect={handleSelect} />
                        </div>
                        <div>{productsCount} products</div>
                    </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-4 md:gap-x-2 pb-4">
                    {
                        productsData?.map((product) => (
                            <ProductCard imageUrl={product?.img[0]} productName={product?.title} productPrice={product?.price} button={true} buttonName="Add to cart" buttonStyles="border border-black w-full py-2" />
                        ))
                    }
                </div>
            </div>
        </>
    );
};