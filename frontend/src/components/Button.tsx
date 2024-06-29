import React from "react";
import { Link } from "react-router-dom";
import ButtonPropsTypes from "../types/ButtonPropsTypes";

const Button: React.FC<ButtonPropsTypes> = ({ buttonName, className, link, onClick }) => {
    return (
        link ? (
            <Link to={link} className={className}>{buttonName}</Link>
        ) : (
            <button className={className} onClick={onClick}>{buttonName}</button>
        )
    );
};

export default Button;