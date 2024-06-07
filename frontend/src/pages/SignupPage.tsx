import React from "react";
import { Link } from "react-router-dom";

export default function SignupPage(): JSX.Element {
    return (
        <div className="flex min-h-screen justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
                        Sign up for WoodWorks.
                    </h2>
                    <p className="mt-2 text-center text-sm text-[#6b7280] dark:text-[#9ca3af]">
                        Discover the beauty of handcrafted wood products and join our growing community.
                    </p>
                </div>
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium">
                            Name
                        </label>
                        <div className="mt-1">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                className="block w-full appearance-none rounded-md border border-[#d1d5db] px-3 py-2 shadow-sm focus:border-[#6366f1] focus:outline-none focus:ring-[#6366f1] sm:text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">
                            Email address
                        </label>
                        <div className="mt-1">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full appearance-none rounded-md border border-[#d1d5db] px-3 py-2 shadow-sm focus:border-[#6366f1] focus:outline-none focus:ring-[#6366f1] sm:text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium">
                            Password
                        </label>
                        <div className="mt-1">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
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
                </div>
                <div>
                    <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-[#d1d5db] bg-[#f8f8f8] py-2 px-4 text-sm font-medium text-[#6b7280] shadow-sm hover:bg-[#f3f4f6] focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2 dark:bg-[#374151] dark:border-[#4b5563] dark:text-[#9ca3af] dark:hover:bg-[#4b5563] dark:hover:text-[#f8f8f8] dark:focus:ring-[#4f46e5]"
                    >
                        <svg
                            className="-ml-1 mr-2 h-5 w-5 text-[#9ca3af]"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                        Sign up with Twitter
                    </button>
                </div>
                <div className="text-center text-sm text-[#6b7280] dark:text-[#9ca3af]">
                    Already have an account?{" "}
                    <Link to={"/signin"} className="font-medium text-[#6366f1] hover:text-[#4f46e5] dark:text-[#4f46e5] dark:hover:text-[#3730a3]">
                        Signin
                    </Link>
                </div>
            </div>
        </div>
    );
};