import React from "react";
import ProductCard from "./ProductCard";

interface ProductListTypes {
    heading: string;
    subHeading?: string;
    className: string;
};

export default function ProductList(props: ProductListTypes): JSX.Element {

    const { heading, subHeading, className } = props;

    return (
        <div className={`${className} space-y-4 py-6 md:py-8`}>
            <div className="mobileContainer md:container lg:mx-auto space-y-3">
                <div className="text-3xl md:text-[40px]">{heading}</div>
                {
                    subHeading ? <div className="text-[#ffffffbf] text-sm md:text-base">{subHeading}</div> : <></>
                }
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-3 lg:gap-2 px-4">
                <ProductCard imageUrl="https://www.lakkadhaara.com/cdn/shop/files/MalibuChestOfDrawer10.png?v=1717823151&width=533" productName="Malibu Chest Of Drawer" productPrice={64000} />
                <ProductCard imageUrl="https://www.lakkadhaara.com/cdn/shop/files/TribalPeacockLakkadhaara.png?v=1706604272&width=533" productName="Tribal Peacock" productPrice={1800} />
                <ProductCard imageUrl="https://www.lakkadhaara.com/cdn/shop/files/YokoRattanTVUnit7.png?v=1706461404&width=533" productName="Yokko Rattan TV Unit" productPrice={44000} />
                <ProductCard imageUrl="https://www.lakkadhaara.com/cdn/shop/files/YokoRattanBedside6.png?v=1706459974&width=533" productName="Yokko Rattan Bedside" productPrice={16000} />
            </div>

            <div className="flex justify-center">
                <button className="border-2 border-gray-400 px-7 py-2">View All</button>
            </div>
        </div>
    );
};