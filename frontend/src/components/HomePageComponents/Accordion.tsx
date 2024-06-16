import React from "react";
import HorizontalLine from "../HorizontalLine";
import { GiStrongMan, GiRiceCooker, GiProcessor } from "react-icons/gi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

export default function Accordion(): JSX.Element {

    const AccordionData = [
        {
            id: 1,
            title: "How solid are we?",
            heading: "Let’s just say we are 100% solid WOOD! Nothing but only the finest material for you.",
            description: "We, at Lakkadhaara, take our work very seriously. Only the finest and most reliable go into the making of Lakkadhaara's exclusive products. We deploy the latest technology and craftspeople that have contributed to the art of making furniture which is one of a kind for generations."
        },
        {
            id: 2,
            title: "Quality, Always",
            heading: "Quality is never an accident.",
            description: "It is always the result of intelligent effort. We spend most of our time and energy for good design and to achieve high quality products. Every single detail from material to technique is thought through with obsessive attention."
        },
        {
            id: 3,
            title: "Slow & Steady Commerce",
            heading: "We believe in slow and steady commerce. We are not in a hurry to sell, we are in a hurry to make you happy.",
            description: "Each and every order is created from scratch and we take about 4-6 weeks to ship. If you need it sooner, please get in touch."
        },
        {
            id: 4,
            title: "Transparency In Our Process",
            heading: "We believe in transparency in our process. We want you to know what goes into making your furniture.",
            description: "From mood boards to delivery, we’re proud of our process. We strive to pull back the curtain on everything we do, giving everyone insight into the “why” and “how” of all-things."
        }
    ];

    const [description, showDescription] = React.useState<boolean>(false);
    console.log(description);

    return (
        <div className="bg-[#F6F6F6] py-6">
            <div className="mobileContainer text-center md:container md:mx-auto space-y-6">
                <div className="text-xs">CRAFTED. CURATED. COLLECTED.</div>
                <HorizontalLine />
                <div className="flex items-center justify-between cursor-pointer hover:underline" onClick={() => showDescription(!description)}>
                    <div className="flex items-center gap-x-2">
                        <GiStrongMan className="text-2xl" />
                        How solid are we?
                    </div>
                    <div>
                        {
                            description ? <MdKeyboardArrowUp className="text-2xl" /> : <MdKeyboardArrowDown className="text-2xl" />
                        }
                    </div>
                </div>
                {
                    description ? (
                        <div>Description</div>
                    ) : (
                        <></>
                    )
                }
                <HorizontalLine />
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        <CiHeart className="text-2xl" />
                        Quality, Always
                    </div>
                    <div>
                        <MdKeyboardArrowDown className="text-2xl" />
                    </div>
                </div>
                <HorizontalLine />
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        <GiRiceCooker className="text-2xl" />
                        Slow & Steady Commerce
                    </div>
                    <div>
                        <MdKeyboardArrowDown className="text-2xl" />
                    </div>
                </div>
                <HorizontalLine />
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        <GiProcessor className="text-2xl" />
                        Transparency In Our Process
                    </div>
                    <div>
                        <MdKeyboardArrowDown className="text-2xl" />
                    </div>
                </div>
                <HorizontalLine />
            </div>
        </div>
    );
};