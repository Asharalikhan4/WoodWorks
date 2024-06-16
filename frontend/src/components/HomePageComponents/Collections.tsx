import React from "react";
import ProductCard from "../ProductCard";

export default function Collections(): JSX.Element {
    return (
        <div className="mobileContainer md:container md:mx-auto space-y-4 py-6 md:py-8">
            <div className="text-3xl md:text-[40px]">Collections</div>
            <div className="grid grid-cols-2 gap-x-1 gap-y-2 md:gap-x-2 md:gap-y-4 md:grid-cols-3">
                <ProductCard imageUrl="https://www.lakkadhaara.com/cdn/shop/products/custom_resized_491dbdec-5032-412a-8387-a138347e9330.jpg?v=1657693025&width=1000" collectionName="Antique Collection" />
                <ProductCard imageUrl="https://www.lakkadhaara.com/cdn/shop/collections/custom_resized_c4bf0292-084b-45e8-8ef7-6ad0d32b191c.jpg?v=1669639099" collectionName="Consoles Table" />
                <ProductCard imageUrl="https://www.lakkadhaara.com/cdn/shop/collections/wooden_firepit_bench_2_png.webp?v=1705665721" collectionName="Bench" />
                <ProductCard imageUrl="https://www.lakkadhaara.com/cdn/shop/collections/asford.png?v=1706082389" collectionName="Chair" />
                <ProductCard imageUrl="https://www.lakkadhaara.com/cdn/shop/products/e94eed2b90c7.png?v=1642321742" collectionName="Cabiets" />
                <ProductCard imageUrl="https://www.lakkadhaara.com/cdn/shop/products/ladoga_black_boho_wall_mirror_900x_f795f01c-cd88-4262-9bbe-5973a4bcc097.png?v=1640955095" collectionName="Mirror" />
            </div>
        </div>
    );
};