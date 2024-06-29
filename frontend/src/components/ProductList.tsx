import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import Button from "./Button";
interface ProductListTypes {
    heading: string;
    subHeading?: string;
    className: string;
};

export default function ProductList(props: ProductListTypes): JSX.Element {

    const { heading, subHeading, className } = props;

    const productType = heading?.split(" ")?.map(word => word?.toLowerCase())?.join("-");
    const productsData = useSelector((state: any) => state.products.products?.products)?.filter(product => product?.category === productType);


    return (
        <div className={`${className} space-y-4 py-6 md:py-8`}>
            <div className="mobileContainer md:container lg:mx-auto space-y-3">
                <div className="text-3xl md:text-[40px]">{heading}</div>
                {
                    subHeading ? <div className="text-[#ffffffbf] text-sm md:text-base">{subHeading}</div> : <></>
                }
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-3 lg:gap-2 px-4">
                {
                    productsData?.map((product) => (
                        <ProductCard imageUrl={product?.img[0]} productName={product?.title} productPrice={product?.price} />
                    ))
                }
            </div>

            <div className="flex justify-center w-full">
                <Button className={"border-2 border-gray-400 px-7 py-2"} buttonName={"View All"} link={`/collections/${productType}`} />
            </div>
        </div>
    );
};