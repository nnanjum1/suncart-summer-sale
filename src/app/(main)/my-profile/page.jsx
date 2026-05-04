import Image from "next/image";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function MyProfilePage() {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) {
        redirect("/login");
    }

    const user = session.user;

    return (

        <div className="bg-[#FFFBEB]">
            <div className="max-w-3xl mx-auto p-6 min-h-screen">

                <h1 className="text-3xl font-bold mb-6">My Profile</h1>

                <div className="bg-white shadow p-6 rounded-xl flex items-center gap-6">

                    <Image
                        src={user.image}
                        alt="profile"
                        width={60}
                        height={60}
                        className="rounded-full"
                    />

                    <div>
                        <h2 className="text-xl font-bold">{user.name}</h2>
                        <p className="text-gray-600">{user.email}</p>

                        <Link href="/my-profile/edit">
                            <button className="mt-3 btn bg-orange-500 text-white">
                                Update Information
                            </button>
                        </Link>
                    </div>

                </div>

                <div className="max-w-3xl mx-auto mt-6 bg-white shadow p-6 rounded-xl">
                    <h2 className="text-2xl font-bold mb-2">My Cart</h2>
                    <p className="text-gray-500">
                        Cart feature will be available soon
                    </p>
                </div>


                <div className="max-w-3xl mx-auto mt-6 bg-white shadow p-6 rounded-xl">
                    <h2 className="text-2xl font-bold mb-2">Purchase History</h2>
                    <p className="text-gray-500">
                        Order history feature will be available soon
                    </p>
                </div>


            </div>


        </div>
    );
}