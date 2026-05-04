"use client";

import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

export default function EditProfilePage() {
    const router = useRouter();

    const { data: session, isPending } = authClient.useSession();

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (session?.user) {
            setName(session.user.name || "");
            setImage(session.user.image || "");
        }
    }, [session]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await authClient.updateUser({
                name: name.trim(),
                image: image.trim(),
            });

            router.refresh();
            router.push("/my-profile");
        } catch (err) {
            console.error("Update error:", err);
            setError(err.message || "Failed to update profile.");
        } finally {
            setLoading(false);
        }
    };

    if (isPending) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <span className="loading loading-spinner loading-lg text-orange-600"></span>
            </div>
        );
    }

    return (
        <div className="bg-[#FFFBEB] min-h-screen p-4 sm:p-6">
            <div className="max-w-xl mx-auto mt-6">


                <Link href="/my-profile" className="btn btn-ghost btn-sm gap-2 text-slate-600 font-bold px-2 mb-6 hover:bg-slate-100">
                    <MdArrowBack className="w-5 h-5" />
                    Back to Profile
                </Link>

                <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-sm">

                    <div className="mb-8">
                        <h1 className="text-3xl font-black text-slate-800 tracking-tight leading-tight">
                            Update Profile
                        </h1>
                        <p className="text-sm text-slate-500 mt-1">
                            Change your account information below
                        </p>
                    </div>


                    {error && (
                        <div className="alert alert-error bg-red-50 border border-red-100 text-red-700 text-sm py-3 px-4 rounded-xl mb-6 flex items-start gap-2">
                            <span className="text-base select-none">⚠️</span>
                            <p className="font-medium leading-tight">{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleUpdate} className="space-y-5">

                        <div>
                            <label className="label text-xs font-bold text-slate-600 uppercase tracking-wider pb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered w-full rounded-xl bg-slate-50 border-slate-200 focus:border-orange-500 focus:outline-none font-medium h-12"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>


                        <div>
                            <label className="label text-xs font-bold text-slate-600 uppercase tracking-wider pb-1">
                                Profile Image URL
                            </label>
                            <input
                                type="url"
                                placeholder="https://images.unsplash.com/photo-1740252117070-7aa2955b25f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBpY29ufGVufDB8fDB8fHww"
                                className="input input-bordered w-full rounded-xl bg-slate-50 border-slate-200 focus:border-orange-500 focus:outline-none font-medium h-12"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                required
                            />
                        </div>


                        <button
                            type="submit"
                            disabled={loading}
                            className="btn bg-orange-600 hover:bg-orange-700 disabled:bg-slate-200 disabled:text-slate-400 text-white w-full rounded-xl border-none font-bold transition h-12 mt-2"
                        >
                            {loading ? <span className="loading loading-spinner loading-sm"></span> : "Save Changes"}
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}