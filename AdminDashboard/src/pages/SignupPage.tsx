import React from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { BASE_URL } from "../utils/constants";

export default function SignupPage(): JSX.Element {

    const navigate = useNavigate();

    const [adminDetails, setAdminDetails] = React.useState({
        name: "",
        email: "",
        password: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAdminDetails({ ...adminDetails, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const response = await fetch(`${BASE_URL}/api/v1/user/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(adminDetails),
            });
            const data = await response.json();
            if (response.status === 400 || response.ok === false) {
                return toast.error(data?.message);
            }
            toast.success(data?.message);
            navigate("/");
        } catch (error) {
            toast.error("An error occurred. Please try again later.");
        } finally {
            setAdminDetails({ name: "", email: "", password: "" });
        }
    };

    return (
        <div className="flex justify-center px-4 md:py-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
                        Admin Sign up for WoodWorks.
                    </h2>
                    <p className="mt-2 text-center text-sm text-[#6b7280] dark:text-[#9ca3af]">
                        Discover the beauty of handcrafted wood products and join our growing community.
                    </p>
                </div>
                <form className="space-y-6" onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="name" className="block text-sm md:text-base font-medium">
                            Name
                        </label>
                        <div className="mt-1">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                value={adminDetails.name}
                                onChange={handleInputChange}
                                className="block w-full appearance-none rounded-md border border-[#d1d5db] px-3 py-2 shadow-sm focus:border-[#6366f1] focus:outline-none focus:ring-[#6366f1] sm:text-sm"
                            />
                        </div>
                    </div>
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
                                value={adminDetails.email}
                                onChange={handleInputChange}
                                className="block w-full appearance-none rounded-md border border-[#d1d5db] px-3 py-2 shadow-sm focus:border-[#6366f1] focus:outline-none focus:ring-[#6366f1] sm:text-sm"
                            />
                        </div>
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
                                value={adminDetails.password}
                                onChange={handleInputChange}
                                className="block w-full appearance-none rounded-md border border-[#d1d5db] px-3 py-2 shadow-sm focus:border-[#6366f1] focus:outline-none focus:ring-[#6366f1] sm:text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md border border-transparent bg-[#6366f1] py-2 px-4 text-sm font-medium text-[#f8f8f8] shadow-sm hover:bg-[#4f46e5] focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 dark:bg-[#4f46e5] dark:hover:bg-[#3730a3] dark:focus:ring-[#4f46e5]"
                        >
                            Sign up
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
                    <div className="text-center text-sm text-[#6b7280] dark:text-[#9ca3af]">
                        Already have an account?{" "}
                        <Link to={"/signin"} className="font-medium text-[#6366f1] hover:text-[#4f46e5] dark:text-[#4f46e5] dark:hover:text-[#3730a3] underline">
                            Signin
                        </Link>
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
            </div>
        </div>
    );
};