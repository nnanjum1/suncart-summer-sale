export default function SummerCareTips() {
    const tips = [
        {
            title: "Stay Hydrated ",
            desc: "Drink at least 8 glasses of water daily to avoid dehydration."
        },
        {
            title: "Use Sunscreen ",
            desc: "Apply SPF 30+ sunscreen every 2-3 hours when outdoors."
        },
        {
            title: "Light Clothing",
            desc: "Wear breathable cotton clothes to stay cool in summer."
        },
        {
            title: "Skincare Routine ",
            desc: "Clean your face twice daily to avoid oil and sweat buildup."
        }
    ];

    return (
        <section className="max-w-6xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
                Summer Care Tips
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {tips.map((tip, index) => (
                    <div key={index} className="p-5 bg-[#ddccff] rounded-xl shadow-md border-gray-800">
                        <h3 className="font-semibold text-lg mb-2">{tip.title}</h3>
                        <p className="text-gray-600 text-lg">{tip.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}