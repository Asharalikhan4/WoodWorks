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
        <div className={`${className} py-4`}>
            <div className="lg:container lg:mx-auto lg:my-5 lg:space-y-2">
                <div className="lg:text-[40px]">{heading}</div>
                {
                    subHeading ? <div className="text-[#ffffffbf]">{subHeading}</div> : null
                }
            </div>

            <div className="lg:flex justify-around lg:space-x-2 lg:px-3">
                <ProductCard imageUrl="https://www.lakkadhaara.com/cdn/shop/files/MalibuChestOfDrawer10.png?v=1717823151&width=533" productName="Malibu Chest Of Drawer" productPrice={64000} />
                <ProductCard imageUrl="https://www.lakkadhaara.com/cdn/shop/files/TribalPeacockLakkadhaara.png?v=1706604272&width=533" productName="Tribal Peacock" productPrice={1800} />
                <ProductCard imageUrl="https://www.lakkadhaara.com/cdn/shop/files/YokoRattanTVUnit7.png?v=1706461404&width=533" productName="Yokko Rattan TV Unit" productPrice={44000} />
                <ProductCard imageUrl="https://www.lakkadhaara.com/cdn/shop/files/YokoRattanBedside6.png?v=1706459974&width=533" productName="Yokko Rattan Bedside" productPrice={16000} />
            </div>

            <div className="lg:flex lg:justify-center py-4">
                <button className="border-2 border-gray-400 px-7 py-2">View All</button>
            </div>
        </div>
    );
};