import ProductCard from "@/app/component/ProductCard";
import { getProducts } from "@/lib/data";

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}