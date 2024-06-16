import React from "react";

interface ProductPropsTypes {
    imageUrl: string;
    productName?: string;
    productPrice?: number;
    collectionName?: string;
};

export default function ProductCard(props: ProductPropsTypes): JSX.Element {

    const { imageUrl, productName, productPrice, collectionName } = props;
    
    return (
        <div className="hover:cursor-pointer hover:underline">
            <div className="overflow-hidden">
                <img src={imageUrl} alt="product image" className="transition-transform duration-500 ease-in-out transform hover:scale-110" />
            </div>
            <div className="py-2 space-y-1 lg:py-2 lg:space-y-2">
                {productName ? <div className="text-xs">{productName}</div> : <></>}
                {productPrice ? <div className="text-sm">₹{productPrice}</div> : <></>}
                {collectionName ? <div className="">{collectionName}</div> : <></>}
            </div>
        </div>
    );
};