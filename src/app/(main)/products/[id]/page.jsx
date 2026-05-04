import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineMail, MdArrowBack } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";
import AddToCartButton from "@/app/component/AddToCartButton";



async function getProductByID(id) {
    try {
        const res = await fetch(
            `https://suncart-product-json-data.onrender.com/products/${id}`,

        );


        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
}

export default async function ProductDetails({ params }) {
    const resParams = await params;
    const { id } = resParams;

    const product = await getProductByID(id);

    if (!product) {
        return (


            <div className="bg-[#FFFBEB] min-h-screen">
                <div className="min-h-[65vh] flex flex-col items-center justify-center p-6">
                    <div className="max-w-md text-center bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                        <h2 className="text-2xl font-black text-slate-800 mt-4 leading-tight">
                            Product Not Found
                        </h2>
                        <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                            We couldn't locate the item you are looking for. It might have sold out or been removed from the summer collection.
                        </p>
                        <Link href="/allproducts" className="btn  bg-purple-950 mt-2 text-white">
                            Back to All Products
                        </Link>
                    </div>
                </div></div>
        );
    }

    return (
        <div className="bg-[#FFFBEB]">
            <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-10 min-h-screen">

                <div className="mb-6">
                    <Link href="/allproducts" className="btn btn-ghost btn-sm gap-2 text-slate-600 hover:text-amber-600 font-bold px-2">
                        <MdArrowBack className="w-5 h-5" />
                        Back to All Products
                    </Link>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center bg-purple-100 border border-slate-100 rounded-3xl p-5 sm:p-8 shadow-sm">


                    <div className="relative w-full h-80 sm:h-[450px] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 select-none">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            priority
                            className="object-cover hover:scale-105 transition duration-700"
                        />
                    </div>


                    <div className="flex flex-col gap-5">
                        <div>
                            <span className="badge bg-amber-100 border-amber-200 text-amber-800 gap-1 font-bold tracking-wider mb-3 px-3 py-2 text-xs uppercase">
                                {product.category}
                            </span>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 tracking-tight leading-[1.15]">
                                {product.name}
                            </h1>
                            <p className="text-sm font-bold text-amber-600 mt-2 tracking-wide">
                                Brand: {product.brand}
                            </p>
                        </div>

                        <p className="text-[#100932] leading-relaxed text-xl">
                            {product.description}
                        </p>

                        <div className="flex items-center gap-6">

                            <span className="text-yellow-500 font-semibold flex items-center gap-1">
                                <FaStar className="text-yellow-500" />
                                {product.rating}
                            </span>


                            <div className="flex items-center gap-2">
                                <span className={`w-2.5 h-2.5 rounded-full ${product.stock > 0 ? "bg-green-500 animate-pulse" : "bg-red-500"}`}></span>
                                <span className={`text-sm font-bold ${product.stock > 0 ? "text-green-600" : "text-red-500"}`}>
                                    {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
                                </span>
                            </div>
                        </div>

                        <div className="divider my-1 opacity-60"></div>


                        <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-slate-700 ">Price</span>
                                <p className="text-green-600 text-3xl  font-bold mt-1">
                                    BDT {product.price}
                                </p>
                            </div>
                            <AddToCartButton product={product} />
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
}