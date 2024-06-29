import React from "react";
import { useNavigate } from "react-router-dom";

interface ProductPropsTypes {
    imageUrl: string;
    productName?: string;
    productPrice?: number;
    collectionName?: string;
    button?: boolean;
    buttonName: string;
    buttonStyles: string;
};

export default function ProductCard(props: ProductPropsTypes): JSX.Element {

    const { imageUrl, productName, productPrice, collectionName, button, buttonName, buttonStyles } = props;

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/product/${productName}`, { replace: true });
    }

    return (
        <div className="hover:underline">
            <div onClick={handleNavigate}>
                <div className="overflow-hidden">
                    <img src={imageUrl} alt="product image" className="transition-transform duration-500 ease-in-out transform hover:scale-110" />
                </div>
                <div className="py-2 space-y-1 lg:py-2 lg:space-y-2">
                    {productName ? <div className="text-xs">{productName}</div> : <></>}
                    {productPrice ? <div className="text-sm">₹{productPrice}</div> : <></>}
                    {collectionName ? <div className="">{collectionName}</div> : <></>}
                </div>
            </div>
            {
                button ? (
                    <button className={`${buttonStyles}`}>{buttonName}</button>
                ) : (
                    <></>
                )
            }
        </div>
    );
};