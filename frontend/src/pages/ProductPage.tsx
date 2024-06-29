import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductList from "../components/ProductList";

interface ProductPageParams {
    name: string;
    [key: string]: string | undefined;
}

export default function ProductPage(): JSX.Element {

    const { name } = useParams<ProductPageParams>();
    const decodedName: string = decodeURIComponent(name ?? "");

    const productData = useSelector((state: any) => state.products.products?.products)?.find(product => product?.title === decodedName);

    const dispatch = useDispatch();

    const [quantity, setQuantity] = React.useState<number>(1);

    const handleAddToCart = () => {
    }

    return (
        <div className="">
            <div className="mobileContainer md:container md:mx-auto grid grid-cols-1 md:grid-cols-2 space-y-4 py-6 md:py-8">
                <div>
                    <img src={productData.img[0]} alt="product" className="w-full" />
                </div>
                <div className="md:px-12 space-y-4">
                    <div className="md:text-[10px]">LAKKADHAARA</div>
                    <div className="md:text-[40px]">{productData.title}</div>
                    <div className="md:text-base">Bed-7</div>
                    <div className="md:text-lg">Rs. {productData.price}</div>
                    <div className="md:text-xs">Tax included. Shipping calculated at checkout.</div>
                    <div className="md:text-[13px]">Quantity</div>
                    <div className="border-2 w-fit px-5 py-1 flex justify-center items-center gap-x-5">
                        <button className="text-xl" onClick={(e) => setQuantity(quantity - 1)}>-</button>
                        <div>{quantity}</div>
                        <button className="text-xl" onClick={(e) => setQuantity(quantity + 1)}>+</button>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <button className="border-2 py-2" onClick={handleAddToCart}>Add to Cart</button>
                        <button className="bg-black text-white border-2 border-black py-2">Buy it Now</button>
                    </div>
                    <div className="md:text-base text-[#121212BF]">{productData.description}</div>
                </div>
            </div>
            <ProductList heading="Explore Our Collections" className="bg-[#ffffff] text-[#121212]" />
        </div>
    );
};