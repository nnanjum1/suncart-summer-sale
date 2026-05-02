"use client";

import { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";

export default function PopularProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const res = await fetch(
                "https://suncart-product-json-data.onrender.com/products"
            );
            const data = await res.json();

            const topThree = data
                .sort((a, b) => b.rating - a.rating)
                .slice(0, 3);

            setProducts(topThree);
        }

        loadProducts();
    }, []);

    return (
        <section className="py-12 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
                Popular Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}