import React from "react";
import InputBoxTypes from "../types/InputBoxTypes";

const InputBox: React.FC<InputBoxTypes> = ({ type, placeholder, value }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
        />
    );
};

export default InputBox;