"use client";

import React from "react";
import Image from "next/image";
import logo from "@/assets/suncartlogo.png";
import Link from "next/link";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const NavBar = () => {
    const router = useRouter();

    const handleLogout = async () => {
        await authClient.signOut();
        router.push("/");
    };

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    return (
        <div className="navbar bg-[#FEF0D6] shadow-sm px-4">

            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#FEF0D6] rounded-box z-[1] mt-3 w-52 p-2 shadow-md text-lg font-medium space-y-1"
                    >
                        <li><NavLink href="/">Home</NavLink></li>
                        <li><NavLink href="/allproducts">Products</NavLink></li>
                        <li><NavLink href="/my-profile">My Profile</NavLink></li>
                    </ul>
                </div>


                <Link href="/" className="btn btn-ghost text-xl p-1">
                    <Image src={logo} alt="SunCart Logo" width={140} height={140} className="w-auto h-8 sm:h-10 object-contain" />
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl gap-2">
                    <li><NavLink href="/">Home</NavLink></li>
                    <li><NavLink href="/allproducts">Products</NavLink></li>
                    <li><NavLink href="/my-profile">My Profile</NavLink></li>
                </ul>
            </div>

            <div className="navbar-end flex gap-2 sm:gap-3 items-center">
                {user ? (
                    <div className="flex items-center gap-2 sm:gap-3">
                        <div className="avatar">
                            <div className="w-8 sm:w-10 rounded-full border border-[#EE8015]/20">
                                <Image
                                    src={user.image || "/default-user.png"}
                                    alt="user"
                                    width={40}
                                    height={40}
                                    className="rounded-full object-cover"
                                />
                            </div>
                        </div>

                        <button
                            onClick={handleLogout}
                            className="btn btn-xs sm:btn-sm bg-red-500 text-white border-none hover:bg-red-600 rounded-lg px-3"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="flex gap-1.5 sm:gap-2">
                        <Link href="/login">
                            <button className="btn btn-sm sm:btn-md bg-[#EE8015] border-none text-white text-sm sm:text-lg hover:bg-[#FEF0D6] hover:text-[#EE8015] hover:border-[#EE8015] rounded-xl px-3 sm:px-4">
                                Login
                            </button>
                        </Link>

                        <Link href="/register">
                            <button className="btn btn-sm sm:btn-md bg-[#EE8015] border-none text-white text-sm sm:text-lg hover:bg-[#FEF0D6] hover:text-[#EE8015] hover:border-[#EE8015] rounded-xl px-3 sm:px-4">
                                Register
                            </button>
                        </Link>
                    </div>
                )}
            </div>

        </div>
    );
};

export default NavBar;