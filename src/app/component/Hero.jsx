"use client";

import Link from "next/link";
import "animate.css";

export default function Hero() {
    return (
        <section className="py-16 px-6">

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">


                <div className="flex justify-center md:justify-start">

                    <div className="bg-white shadow-lg rounded-3xl px-8 py-8 border border-amber-100 w-fit text-center md:text-left">

                        <div className="flex items-center justify-center md:justify-start gap-2 text-amber-600 font-semibold text-lg mb-3">
                            <span>🔥</span>
                            <span>Hot Deals</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">
                            Summer Sale
                        </h2>


                        <p className="text-3xl md:text-4xl font-black text-orange-600 mt-2 animate__animated animate__pulse animate__infinite">
                            50% OFF
                        </p>

                        <p className="text-sm text-slate-500 mt-3">
                            Limited time offer — grab it fast!
                        </p>

                    </div>
                </div>


                <div className="flex flex-col gap-6 text-center md:text-left">

                    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800">
                        Welcome to{" "}
                        <span className="text-amber-600">SunCart</span>
                    </h1>

                    <p className="text-slate-600 text-base sm:text-lg max-w-md mx-auto md:mx-0">
                        Your one-stop shop for summer essentials — sunglasses, skincare,
                        beachwear, and more. Stay cool, stay stylish.
                    </p>

                    <Link
                        href="/products"
                        className="bg-amber-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-amber-700 transition w-fit mx-auto md:mx-0 shadow-md"
                    >
                        View Products
                    </Link>

                </div>

            </div>
        </section>
    );
}