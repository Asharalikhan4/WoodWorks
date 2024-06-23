import React, { useState } from "react";
import HorizontalLine from "../HorizontalLine";
import { GiStrongMan, GiRiceCooker, GiProcessor } from "react-icons/gi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

export default function Accordion(): JSX.Element {

    const [openItemId, setOpenItemId] = useState<string | null>(null);

    const toggleItem = (id: string) => {
        setOpenItemId(prevId => prevId === id ? null : id);
    };

    const AccordionData = [
        {
            id: "1",
            icon: <GiStrongMan className="text-2xl" />,
            title: "How solid are we?",
            heading: "Let’s just say we are 100% solid WOOD! Nothing but only the finest material for you.",
            description: "We, at Lakkadhaara, take our work very seriously. Only the finest and most reliable go into the making of Lakkadhaara's exclusive products. We deploy the latest technology and craftspeople that have contributed to the art of making furniture which is one of a kind for generations."
        },
        {
            id: "2",
            icon: <CiHeart className="text-2xl" />,
            title: "Quality, Always",
            heading: "Quality is never an accident.",
            description: "It is always the result of intelligent effort. We spend most of our time and energy for good design and to achieve high quality products. Every single detail from material to technique is thought through with obsessive attention."
        },
        {
            id: "3",
            icon: <GiRiceCooker className="text-2xl" />,
            title: "Slow & Steady Commerce",
            description: "Each and every order is created from scratch and we take about 4-6 weeks to ship. If you need it sooner, please get in touch."
        },
        {
            id: "4",
            icon: <GiProcessor className="text-2xl" />,
            title: "Transparency In Our Process",
            description: "From mood boards to delivery, we’re proud of our process. We strive to pull back the curtain on everything we do, giving everyone insight into the “why” and “how” of all-things."
        }
    ];

    const [description, showDescription] = React.useState<boolean>(false);

    return (
        <div className="bg-[#F6F6F6] py-6">
            <div className="mobileContainer text-center md:container md:mx-auto space-y-6">
                <div className="text-xs">CRAFTED. CURATED. COLLECTED.</div>
                <HorizontalLine />
                {/* <div className="flex items-center justify-between cursor-pointer hover:underline" onClick={() => showDescription(!description)}>
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
                <HorizontalLine /> */}


                {
                    AccordionData?.map((data) => {
                        return (
                            <div key={data.id}>
                                <div className="flex items-center justify-between cursor-pointer hover:underline" onClick={() => toggleItem(data.id)}>
                                    <div className="flex items-center gap-x-2">
                                        {data.icon}
                                        {data.title}
                                    </div>
                                    <div>
                                        {
                                            openItemId === data.id ? <MdKeyboardArrowUp className="text-2xl" /> : <MdKeyboardArrowDown className="text-2xl" />
                                        }
                                    </div>
                                </div>
                                {
                                    openItemId === data.id ? (
                                        <div className="p-4 space-y-4">
                                            <div className="text-start text-xl md:text-2xl">{data.heading}</div>
                                            <div className="text-start">{data.description}</div>
                                        </div>
                                    ) : (
                                        <></>
                                    )
                                }
                                <HorizontalLine />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};