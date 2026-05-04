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

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleLogout = async () => {
        await authClient.signOut();
        router.push("/");
    };

    return (
        <div className="navbar bg-[#FEF0D6] shadow-sm px-4">


            <div className="navbar-start">


                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
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
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </div>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                        <li><NavLink href="/">Home</NavLink></li>
                        <li><NavLink href="/allproducts">Products</NavLink></li>
                        <li><NavLink href="/my-profile">My Profile</NavLink></li>
                    </ul>
                </div>


                <Link href="/" className="btn btn-ghost text-xl">
                    <Image src={logo} alt="logo" width={120} height={40} />
                </Link>

            </div>


            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg gap-2">
                    <li><NavLink href="/">Home</NavLink></li>
                    <li><NavLink href="/allproducts">Products</NavLink></li>
                    <li><NavLink href="/my-profile">My Profile</NavLink></li>
                </ul>
            </div>


            <div className="navbar-end flex gap-2 items-center">

                {user ? (
                    <>
                        <img
                            src={user.image || "/default-user.png"}
                            className="w-8 h-8 rounded-full"
                            alt="user"
                        />

                        <button onClick={handleLogout} className="btn btn-sm bg-red-500 text-white">
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link href="/login" className="btn btn-sm bg-orange-500 text-white">
                            Login
                        </Link>

                        <Link href="/register" className="btn btn-sm bg-orange-500 text-white">
                            Register
                        </Link>
                    </>
                )}

            </div>

        </div>
    );
};

export default NavBar;