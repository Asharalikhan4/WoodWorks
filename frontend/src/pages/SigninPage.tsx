import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import Cookies from "js-cookie";

export default function SigninPage(): JSX.Element {

    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        let errorMessage = "";

        if (name === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                errorMessage = "Please enter a valid email address.";
            }
        } else if (name === "password") {
            if (value.length < 3) {
                errorMessage = "Password must be at least 6 characters long.";
            }
        }

        setErrors({ ...errors, [name]: errorMessage });
    };

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            if (errors.email || errors.password) {
                return;
            }
            const response = await fetch("http://localhost:8080/api/v1/user/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userDetails),
            });
            const data = await response.json();
            if (response.status === 400 || response.ok === false) {
                return toast.error(data?.message);
            }
            Cookies.set("jwt_token", data?.token, { httpOnly: true, sameSite: 'strict' });
            toast.success(data?.message);
            // navigate("/");
        } catch (error) {
            toast.error("An error occurred. Please try again later.");
        } finally {
            setUserDetails({email: "", password: "" });
            setErrors({ email: "", password: "" });
        }
    };

    const isFormValid = !errors.email && !errors.password;

    return (
        <div className="flex justify-center px-4 md:py-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
                        Sign in for WoodWorks.
                    </h2>
                    <p className="mt-2 text-center text-sm text-[#6b7280] dark:text-[#9ca3af]">
                        Discover the beauty of handcrafted wood products and join our growing community.
                    </p>
                </div>
                <form className="space-y-6" onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="email" className="block text-sm md:text-base font-medium">
                            Email address
                        </label>
                        <div className="mt-1">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={userDetails.email}
                                onChange={handleInputChange}
                                onBlur={handleInputBlur}
                                className="block w-full appearance-none rounded-md border border-[#d1d5db] px-3 py-2 shadow-sm focus:border-[#6366f1] focus:outline-none focus:ring-[#6366f1] sm:text-sm"
                            />
                        </div>
                        {errors.email && (
                                <p className="mt-1 text-xs md:text-sm text-red-500">{errors.email}</p>
                            )}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm md:text-base font-medium">
                            Password
                        </label>
                        <div className="mt-1">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={userDetails.password}
                                onChange={handleInputChange}
                                onBlur={handleInputBlur}
                                className="block w-full appearance-none rounded-md border border-[#d1d5db] px-3 py-2 shadow-sm focus:border-[#6366f1] focus:outline-none focus:ring-[#6366f1] sm:text-sm"
                            />
                        </div>
                        {errors.password && (
                                <p className="mt-1 text-xs md:text-sm text-red-500">{errors.password}</p>
                            )}
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={!isFormValid}
                            className={`flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-[#f8f8f8] shadow-sm hover:bg-[#4f46e5] focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 dark:bg-[#4f46e5] dark:hover:bg-[#3730a3] dark:focus:ring-[#4f46e5] ${
                                isFormValid
                                    ? "bg-[#6366f1] dark:bg-[#4f46e5]"
                                    : "bg-[#9ca3af] dark:bg-[#6b7280] cursor-not-allowed"
                            }`}
                        >
                            Sign in
                        </button>
                    </div>
                </form>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 rounded border-[#d1d5db] text-[#6366f1] focus:ring-[#6366f1] dark:border-[#4b5563] dark:bg-[#374151] dark:checked:bg-[#4f46e5] dark:checked:border-[#4f46e5] dark:focus:ring-[#4f46e5]"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-[#333] dark:text-[#9ca3af]">
                            Remember me
                        </label>
                    </div>
                    <div className="text-sm">
                        <a
                            href="#"
                            className="font-medium text-[#6366f1] hover:text-[#4f46e5] dark:text-[#4f46e5] dark:hover:text-[#3730a3]"
                        >
                            Forgot your password?
                        </a>
                    </div>
                </div>
                <div>
                    <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-[#d1d5db] bg-[#f8f8f8] py-2 px-4 text-sm font-medium text-[#6b7280] shadow-sm hover:bg-[#f3f4f6] focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 dark:bg-[#374151] dark:border-[#4b5563] dark:text-[#9ca3af] dark:hover:bg-[#4b5563] dark:hover:text-[#f8f8f8] dark:focus:ring-[#4f46e5]"
                    >
                        <FaGithub className="-ml-1 mr-2 h-5 w-5 text-[#9ca3af]" />
                        Sign in with Github
                    </button>
                </div>
                <div className="text-center text-sm text-[#6b7280] dark:text-[#9ca3af]">
                    Didn't have an account?{" "}
                    <Link to={"/signup"} className="font-medium text-[#6366f1] hover:text-[#4f46e5] dark:text-[#4f46e5] dark:hover:text-[#3730a3] underline">
                        Signup
                    </Link>
                </div>
            </div>
        </div>
    );
};