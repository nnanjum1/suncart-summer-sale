import Image from "next/image";
import Hero from "../component/Hero";
import PopularProducts from "./PopularProducts";
import SummerCareTips from "../component/SummerCareTips";
import TopBrands from "../component/TopBrands";

export default function Home() {
  return (
    <div className="bg-[#FFFBEB] min-h-screen">
      <Hero />
      <PopularProducts />
      <SummerCareTips />
      <TopBrands />
    </div>
  );
}
