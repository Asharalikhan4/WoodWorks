// components/InputField.tsx
import React, { useState, InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  showSigns?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, showSigns, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setHasValue(!!e.target.value);
  };

  return (
    <div className="relative mb-4">
      <input
        id={name}
        name={name}
        className={`peer w-full border-b-2 border-gray-300 bg-transparent px-3 py-2 outline-none transition-all focus:border-blue-500 ${
          isFocused || hasValue ? 'pt-6' : ''
        }`}
        placeholder=" "
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      {
        showSigns ? (
          <div className="absolute right-3 top-2 text-gray-500">
            {showSigns}
          </div>
        ) : (
          <></>
        )
      }
      <label
        htmlFor={name}
        className={`absolute left-3 top-2 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500 ${
          isFocused || hasValue ? 'top-0 text-sm text-blue-500' : ''
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;