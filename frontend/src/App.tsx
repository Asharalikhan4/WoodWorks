import React from "react";
import NotificationBar from "./components/NotificationBar";

export default function App(): JSX.Element {
    return (
        <div className="text-4xl">
            <NotificationBar />
            <h1>Hello, World!</h1>
        </div>
    );
};