import React from 'react';
import Link from 'next/link';
import { MdOutlineMail } from 'react-icons/md';
import { IoMdCall } from 'react-icons/io';
import { CiLocationOn } from 'react-icons/ci';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#FEF0D6] border-t border-slate-200 mt-auto">

            <div className="container mx-auto px-6 py-10 
                grid grid-cols-1 md:grid-cols-3 gap-8 
                text-center md:text-left">


                <nav className="flex flex-col items-center md:items-start gap-2">
                    <h6 className="footer-title text-slate-800 font-bold mb-2">Contact Us</h6>

                    <p className="text-sm text-slate-600 flex items-center gap-2">
                        <MdOutlineMail className="w-4 h-4 text-amber-600" />
                        support@suncart.com
                    </p>

                    <p className="text-sm text-slate-600 flex items-center gap-2">
                        <IoMdCall className="w-4 h-4 text-amber-600" />
                        +880 1234-567890
                    </p>

                    <p className="text-sm text-slate-600 flex items-center gap-2">
                        <CiLocationOn className="w-4 h-4 text-amber-600" />
                        Dhaka, Bangladesh
                    </p>
                </nav>


                <nav className="flex flex-col items-center md:items-start gap-2">
                    <h6 className="footer-title text-slate-800 font-bold mb-2">Connect</h6>

                    <div className="flex gap-4 text-2xl text-slate-700">
                        <a className="hover:text-amber-600 transition"><FaFacebook /></a>
                        <a className="hover:text-amber-600 transition"><FaInstagram /></a>
                        <a className="hover:text-amber-600 transition"><FaLinkedin /></a>
                    </div>
                </nav>


                <nav className="flex flex-col items-center md:items-start gap-2">
                    <h6 className="footer-title text-slate-800 font-bold mb-2">Legal</h6>

                    <Link
                        href="/privacy-policy"
                        className="link link-hover text-sm text-slate-600 hover:text-amber-600 font-medium"
                    >
                        Privacy Policy
                    </Link>
                </nav>
            </div>

            <div className="border-t border-slate-200 bg-white/30 py-4 text-center">
                <p className="text-sm text-slate-500">
                    © {new Date().getFullYear()} SunCart. All rights reserved.
                </p>
            </div>
        </footer>
    );
}