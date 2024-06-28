import React, { useState, FocusEvent, ChangeEvent } from 'react';
import InputField from './InputField';

interface TextInputProps {
  placeholder: string;
}

const InputFieldNew: React.FC<TextInputProps> = ({ placeholder }) => {
  const [value, setValue] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setIsFocused(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="relative w-64">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-full h-12 px-3 py-2 border rounded focus:outline-none"
      />
      <label
        className={`absolute left-3 transition-all duration-200 ${
          isFocused || value ? 'top-0 text-xs text-blue-500' : 'top-3 text-gray-500'
        }`}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default InputFieldNew;
