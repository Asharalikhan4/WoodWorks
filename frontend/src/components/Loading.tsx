import React from "react";

export default function Loading(): JSX.Element {
    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <iframe 
                src="https://lottie.host/embed/38b6ca03-bc5c-4c0a-97fd-d4dbeb9b5a1d/yyLeMbowVz.json" 
                className="border-none"
            ></iframe>
        </div>
    );
};