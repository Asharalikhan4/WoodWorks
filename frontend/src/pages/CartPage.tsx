import React from "react";
import { Link } from "react-router-dom";
import HorizontalLine from "../components/HorizontalLine";
import { RiDeleteBin6Line } from "react-icons/ri";
import ProductList from "../components/ProductList";

export default function CartPage(): JSX.Element {
    return (
        <div className="space-y-4 py-6 md:py-8">
            {/* Mobile Cart */}
            <div className="md:hidden mobileContainer space-y-4">
                <div className="flex items-center justify-around">
                    <div className="text-3xl">Your Cart</div>
                    <Link to={"/"} className="underline">Continue Shopping</Link>
                </div>
                <div className="flex justify-between">
                    <div>Product</div>
                    <div>Total</div>
                </div>
                <HorizontalLine />
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-x-4">
                            <img src="https://www.lakkadhaara.com/cdn/shop/files/LeelaPosterBed1.png?v=1718198777&width=300" alt="product" className="h-32 w-30" />
                            <div className="space-y-4">
                                <div className="text-base text-[#121212]">Leela Poster Bed</div>
                                <div className="text-sm text-[#121212bf]">Rs. 88,000.00</div>
                                <div className="basis-1/4 flex items-center gap-x-2">
                                    <div className="border-2 w-2/3 px-5 py-1 flex justify-center items-center gap-x-5">
                                        <button className="text-xl">-</button>
                                        <div>0</div>
                                        <button className="text-xl">+</button>
                                    </div>
                                    <RiDeleteBin6Line className="text-lg" />
                                </div>
                            </div>
                        </div>
                        <div>Rs. 88,000.00</div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex gap-x-4">
                            <img src="https://www.lakkadhaara.com/cdn/shop/files/LeelaPosterBed1.png?v=1718198777&width=300" alt="product" className="h-32 w-30" />
                            <div className="space-y-4">
                                <div className="text-base text-[#121212]">Leela Poster Bed</div>
                                <div className="text-sm text-[#121212bf]">Rs. 88,000.00</div>
                                <div className="basis-1/4 flex items-center gap-x-2">
                                    <div className="border-2 w-2/3 px-5 py-1 flex justify-center items-center gap-x-5">
                                        <button className="text-xl">-</button>
                                        <div>0</div>
                                        <button className="text-xl">+</button>
                                    </div>
                                    <RiDeleteBin6Line className="text-lg" />
                                </div>
                            </div>
                        </div>
                        <div>Rs. 88,000.00</div>
                    </div>
                </div>
                <HorizontalLine />
                <div className="text-center space-y-4">
                    <div>Estimated total: Rs. 174,000.00</div>
                    <div className="text-sm">Tax included. Shipping and discounts calculated at checkout.</div>
                    <button className="border-2 bg-black text-white px-20 py-2">Checkout</button>
                </div>
            </div>

            {/* Laptop Screen Cart */}
            <div className="hidden md:block md:container md:mx-auto space-y-4">
                <div className="flex items-center justify-around">
                    <div className="md:text-[40px]">Your Cart</div>
                    <Link to={"/"} className="underline">Continue Shopping</Link>
                </div>
                <div className="flex justify-between">
                    <div className="basis-1/2">Product</div>
                    <div className="basis-1/4">Quantity</div>
                    <div className="basis-1/4">Total</div>
                </div>
                <HorizontalLine />
                <div className="space-y-4">
                    <div className="flex items-center">
                        <div className=" basis-1/2 flex gap-x-4">
                            <img src="https://www.lakkadhaara.com/cdn/shop/files/LeelaPosterBed1.png?v=1718198777&width=300" alt="product" className="h-40 w-30" />
                            <div>
                                <div>Leela Poster Bed</div>
                                <div>Rs. 88,000.00</div>
                            </div>
                        </div>
                        <div className="basis-1/4 flex items-center gap-x-2">
                            <div className="border-2 w-1/2 px-5 py-1 flex justify-center items-center gap-x-5">
                                <button className="text-xl">-</button>
                                <div>0</div>
                                <button className="text-xl">+</button>
                            </div>
                            <RiDeleteBin6Line className="text-lg" />
                        </div>
                        <div className="basis-1/4">Rs. 88,000.00</div>
                    </div>

                    <div className="flex items-center">
                        <div className=" basis-1/2 flex gap-x-4">
                            <img src="https://www.lakkadhaara.com/cdn/shop/files/LeelaPosterBed1.png?v=1718198777&width=300" alt="product" className="h-40 w-30" />
                            <div>
                                <div>Leela Poster Bed</div>
                                <div>Rs. 88,000.00</div>
                            </div>
                        </div>
                        <div className="basis-1/4 flex items-center gap-x-2">
                            <div className="border-2 w-1/2 px-5 py-1 flex justify-center items-center gap-x-5">
                                <button className="text-xl">-</button>
                                <div>0</div>
                                <button className="text-xl">+</button>
                            </div>
                            <RiDeleteBin6Line className="text-lg" />
                        </div>
                        <div className="basis-1/4">Rs. 88,000.00</div>
                    </div>
                </div>
                <HorizontalLine />
                <div className="text-right space-y-4">
                    <div>Estimated total: Rs. 174,000.00</div>
                    <div>Tax included. Shipping and discounts calculated at checkout.</div>
                    <button className="border-2 bg-black text-white px-20 py-2">Checkout</button>
                </div>
            </div>
            <ProductList heading="Sofa Collection" className="bg-[#ffffff] text-[#121212]" />
        </div>

    );
};