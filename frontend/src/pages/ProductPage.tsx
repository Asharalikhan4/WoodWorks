import React from "react";
import { useDispatch } from "react-redux";
import ProductList from "../components/ProductList";

export default function ProductPage(): JSX.Element {

    const dispatch = useDispatch();

    const [quantity, setQuantity] = React.useState<number>(1);

    const handleAddToCart = () => {
    }

    return (
        <div className="">
            <div className="mobileContainer md:container md:mx-auto grid grid-cols-1 md:grid-cols-2 space-y-4 py-6 md:py-8">
                <div>
                    <img src="https://www.lakkadhaara.com/cdn/shop/files/LeelaPosterBed1.png?v=1718198777&width=1426" alt="product" className="w-full" />
                </div>
                <div className="md:px-12 space-y-4">
                    <div className="md:text-[10px]">LAKKADHAARA</div>
                    <div className="md:text-[40px]">Leela Poster Bed</div>
                    <div className="md:text-base">Bed-7</div>
                    <div className="md:text-lg">Rs. 88,000.00</div>
                    <div className="md:text-xs">Tax included. Shipping calculated at checkout.</div>
                    <div className="md:text-[13px]">Quantity</div>
                    <div className="border-2 w-fit px-5 py-1 flex justify-center items-center gap-x-5">
                        <button className="text-xl">-</button>
                        <div>{quantity}</div>
                        <button className="text-xl">+</button>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <button className="border-2 py-2" onClick={handleAddToCart}>Add to Cart</button>
                        <button className="bg-black text-white border-2 border-black py-2">Buy it Now</button>
                    </div>
                    <div className="md:text-base text-[#121212BF]">Experience the elegance and luxury of the Leela Poster Bed. With its stunning design and sturdy construction, this bed will transform your bedroom into a luxurious retreat. Create a sense of sophistication and indulgence in your space with this beautiful centerpiece.</div>
                </div>
            </div>
            <ProductList heading="Explore Our Collections" className="bg-[#ffffff] text-[#121212]" />
        </div>
    );
};