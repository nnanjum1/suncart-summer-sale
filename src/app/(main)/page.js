import Image from "next/image";
import Hero from "../component/Hero";
import PopularProducts from "./PopularProducts";

export default function Home() {
  return (
    <div className="bg-[#FFFBEB] min-h-screen">
      <Hero />
      <PopularProducts />

    </div>
  );
}
