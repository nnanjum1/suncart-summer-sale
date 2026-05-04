"use client";

import Search from "@/app/component/Search";
import ProductCard from "@/app/component/ProductCard";
import { getProducts } from "@/lib/data";
import { useEffect, useState } from "react";

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

    const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="bg-[#FFFBEB] p-5 min-h-screen">
            <div className="container mx-auto">

                <Search search={search} setSearch={setSearch} />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {filteredProducts.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>

            </div>
        </div>
    );
}