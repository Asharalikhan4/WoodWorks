import React, { useState } from "react";
import FooterListCard from "./FooterListCard";

export default function FooterList(): JSX.Element {

    const [currentSlide, setCurrentSlide] = useState(0);

    const cardsData = [
        {
            id: 1,
            imageUrl: 'https://www.lakkadhaara.com/cdn/shop/files/satisfaction-guaranteed_black.png?v=1698153282&width=400',
            title: 'Damage Covered',
            description: 'Be assured. Your order is in the safe hands now. We provide replacement on damaged items.',
        },
        {
            id: 2,
            imageUrl: 'https://www.lakkadhaara.com/cdn/shop/files/4124813-badge-insignia-premium-badge-quality-star-badge_113911.png?v=1641278540&width=400',
            title: '100% Genuine Products',
            description: 'We manufacture 100% Genuine Solid Wood Furniture because its durable and have long life.',
        },
        {
            id: 3,
            imageUrl: 'https://www.lakkadhaara.com/cdn/shop/files/archive-interface-symbol-of-outlined-box-perspective_icon-icons.com_57891.png?v=1641278129&width=400',
            title: 'Free Delivery',
            description: 'To provide you best shopping experience with us, We provide free delivery on every order we receive.',
        },
    ];

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? cardsData.length - 1 : prevSlide - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === cardsData.length - 1 ? 0 : prevSlide + 1));
    };

    return (
        <div className="mobileContainer py-6 grid gap-y-2 md:py-8 md:container md:gap-y-2 md:grid md:grid-cols-1 lg:mx-auto lg:grid-cols-3 lg:gap-x-2">
            {
                cardsData?.map((card ) => {
                    return <FooterListCard key={card?.id} {...card}/>
                })
            }
        </div>
    );
};