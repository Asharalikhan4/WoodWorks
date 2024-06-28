import React, { useState, FormEvent } from "react";
import InputField from "../components/InputField";
import { AddProductPageStateTypes } from "../types/types";
import InputFieldNew from "../components/InputFieldNew";

const AddProductPage: React.FC = () => {
    const [formData, setFormData] = useState<AddProductPageStateTypes>({
        productName: "",
        productDescription: "",
        productPrice: 0,
        productType: "",
        productImage: []
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Form Data:', formData);

        setFormData({
            productName: "",
            productDescription: "",
            productPrice: 0,
            productType: "",
            productImage: []
        });
    };

    return (
        // <div className="flex min-h-screen items-center justify-center bg-gray-100">
        //   <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        //     <h1 className="mb-6 text-2xl font-bold text-center">Sample Form</h1>
        //     <form onSubmit={handleSubmit}>
        //       <InputField
        //         label="Full Name"
        //         name="fullName"
        //         type="text"
        //         required
        //         value={formData.fullName}
        //         onChange={handleChange}
        //       />
        //       <InputField
        //         label="Email"
        //         name="email"
        //         type="email"
        //         required
        //         value={formData.email}
        //         onChange={handleChange}
        //       />
        //       <InputField
        //         label="Password"
        //         name="password"
        //         type="password"
        //         required
        //         value={formData.password}
        //         onChange={handleChange}
        //       />
        //       <button
        //         type="submit"
        //         className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        //       >
        //         Submit
        //       </button>
        //     </form>
        //   </div>
        // </div>
        <div className="w-full p-4 space-y-4 border-2">
            <div className="text-3xl">Add New Product</div>
            <form onSubmit={handleSubmit}>
                <InputField
                    label="Product Name"
                    name="productName"
                    type="text"
                    required
                    value={formData.productName}
                    onChange={handleChange}
                />
                <InputField
                    label="Product Description"
                    name="productDescription"
                    type="text"
                    required
                    value={formData.productDescription}
                    onChange={handleChange}
                />
                <InputField
                    label="Product Price"
                    name="productPrice"
                    type="number"
                    required
                    value={formData.productPrice}
                    onChange={handleChange}
                />
                <InputField
                    label="Product Type"
                    name="productType"
                    type="text"
                    required
                    value={formData.productType}
                    onChange={handleChange}
                />
                <InputField
                    label="Product Image"
                    name="productImage"
                    type="text"
                    required
                    value={formData.productImage}
                    onChange={handleChange}
                    showSigns={true}
                />
                <button
                    type="submit"
                    className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-10"
                >
                    Submit
                </button>
                <InputFieldNew placeholder="Enter text" />
            </form>
        </div>
    );
};

export default AddProductPage;