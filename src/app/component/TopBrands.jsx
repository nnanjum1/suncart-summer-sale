export default function TopBrands() {
    const brands = [
        { name: "SunShade", color: "bg-yellow-100" },
        { name: "GlowCare", color: "bg-pink-100" },
        { name: "CoolBreeze", color: "bg-blue-100" },
        { name: "OceanPack", color: "bg-green-100" }
    ];

    return (
        <section className="max-w-6xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
                Top Brands
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {brands.map((brand, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-xl text-center font-bold shadow-md ${brand.color}`}
                    >
                        {brand.name}
                    </div>
                ))}
            </div>
        </section>
    );
}