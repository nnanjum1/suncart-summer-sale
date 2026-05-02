import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function ProductCard({ product }) {
    return (
        <div className="bg-[#b4ffa2] rounded-xl shadow-md hover:shadow-lg my-6 transition p-4">
            <div className="w-full h-48 relative mb-3">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg"
                />
            </div>


            <h2 className="text-lg font-semibold">{product.name}</h2>

            <div className="flex items-center justify-between mt-1">

                <span className="text-blue-900 font-bold">
                    BDT {product.price}
                </span>

                <span className="text-yellow-500 font-semibold flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    {product.rating}
                </span>

            </div>

            <Link href={`/products/${product.id}`}>
                <button className="mt-3 w-full btn text-white hover:bg-[#dd8842] bg-[#ce6c1c]">
                    View Details
                </button>
            </Link>
        </div>
    );
}