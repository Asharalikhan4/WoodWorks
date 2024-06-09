import React from "react";

interface ProductPropsTypes {
    imageUrl: string;
    productName: string;
    productPrice: number;
};

export default function ProductCard(props: ProductPropsTypes): JSX.Element {

    const { imageUrl, productName, productPrice } = props;
    
    return (
        <div className="hover:cursor-pointer hover:underline">
            <img src={imageUrl} alt="product image" />
            <div className="lg:text-sm lg:py-2 lg:space-y-2">
                <div>{productName}</div>
                <div>Rs. {productPrice}</div>
            </div>
        </div>
    );
};