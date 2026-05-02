"use client";

import React from "react";
import Image from "next/image";
import logo from "@/assets/suncartlogo.png";
import Link from "next/link";
import NavLink from "./NavLink";

const NavBar = () => {
    return (
        <div className="navbar bg-[#FEF0D6] shadow-sm">
            <div className="navbar-start">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <NavLink href="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink href="/products">Products</NavLink>
                        </li>
                        <li>
                            <NavLink href="/my-profile">My Profile</NavLink>
                        </li>
                    </ul>
                </div>


                <a className="btn btn-ghost text-xl">
                    <Image src={logo} alt="SunCart Logo" width={200} height={200} />
                </a>
            </div>


            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl">
                    <li>
                        <NavLink href="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink href="/products">Products</NavLink>
                    </li>
                    <li>
                        <NavLink href="/my-profile">My Profile</NavLink>
                    </li>
                </ul>
            </div>


            <div className="navbar-end">
                <a className="btn bg-[#EE8015] text-white text-lg" >Login</a>
            </div>
        </div>
    );
};

export default NavBar;