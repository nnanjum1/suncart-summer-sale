"use client";

import toast from "react-hot-toast";

export default function AddToCartButton({ product }) {
    return (
        <button
            disabled={product.stock <= 0}
            onClick={() => toast.success(`${product.name} added to cart!`)}
            className="btn bg-orange-600 hover:bg-orange-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold px-6 py-2  rounded-2xl "
        >
            {product.stock > 0 ? "Add to Cart" : "Sold Out"}
        </button>
    );
}