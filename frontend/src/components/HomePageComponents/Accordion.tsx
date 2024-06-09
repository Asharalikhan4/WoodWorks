import React, { useState } from "react";

interface AccordianPropsTypes {
    title: string;
    content: string;
}

export default function Accordion(props: AccordianPropsTypes): JSX.Element {

    const { title, content } = props;

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border border-gray-300 rounded-md mb-4">
            <div
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={toggleAccordion}
            >
                <h3 className="text-lg font-semibold">{title}</h3>
                <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </span>
            </div>
            {isOpen && (
                <div className="p-4 border-t border-gray-300">{content}</div>
            )}
        </div>
    );
};