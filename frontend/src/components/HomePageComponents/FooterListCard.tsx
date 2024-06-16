import React from "react";

interface FooterListCardProps {
    imageUrl: string;
    title: string;
    description: string;
};

const FooterListCard: React.FC<FooterListCardProps> = ({ imageUrl, title, description }) => {
    return (
        <div className="bg-[#F6F6F6] flex flex-col justify-center items-center space-y-4 py-6 px-4 text-center">
            <img src={imageUrl} alt={title} className="h-28 w-28" />
            <div className="text-base md:text-lg">{title}</div>
            <div className="text-xs md:text-sm">{description}</div>
        </div>
    );
};

export default FooterListCard;