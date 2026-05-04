import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FFFBEB] p-6">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-10 border border-orange-100 text-center flex flex-col items-center justify-center">


                <h1 className="text-8xl font-extrabold text-orange-600 tracking-widest mb-2 animate-pulse">
                    404
                </h1>

                <h2 className="text-2xl font-bold text-slate-800 mb-3">
                    Page Not Found
                </h2>

                <p className="text-slate-600 text-sm mb-8 max-w-xs">
                    Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
                </p>


                <Link href="/">
                    <button className="btn bg-orange-600 hover:bg-orange-700 hover:shadow-lg text-white font-bold px-8 py-3 rounded-xl transition duration-300 ease-in-out transform hover:-translate-y-0.5">
                        Go Back Home
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default NotFound;