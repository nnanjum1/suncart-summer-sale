"use client";

import Search from "@/app/component/Search";
import { getProducts } from "@/lib/data";
import { useState, useEffect } from "react";
import ProductCard from "@/app/component/ProductCard";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");


    useEffect(() => {
        async function load() {
            const data = await getProducts();
            setProducts(data);
        }
        load();
    }, []);

    const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="bg-[#FFFBEB] p-5">
            <div className="container mx-auto">
                <Search search={search} setSearch={setSearch} />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {filtered.length > 0 ? (
                        filtered.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <p>No products found.</p>
                    )}
                </div></div>
        </div>
    );
}