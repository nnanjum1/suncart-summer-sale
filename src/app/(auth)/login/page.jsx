"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [redirectTo, setRedirectTo] = useState("/");

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const redirect = params.get("redirect");
        if (redirect) setRedirectTo(redirect);
    }, []);

    const handleLoginFunc = async (data) => {
        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
        });

        if (error) {
            alert(error.message);
            return;
        }

        if (res) {
            router.push(redirectTo);
        }
    };

    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FFFBEB] p-4">

            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-orange-100">

                <h2 className="text-3xl font-extrabold text-center text-orange-600 mb-6">
                    Login your Account
                </h2>

                <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>

                    <input
                        type="email"
                        placeholder="Enter email"
                        className="input input-bordered w-full"
                        {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                    <div className="relative">
                        <input
                            type={isShowPassword ? "text" : "password"}
                            placeholder="Enter password"
                            className="input input-bordered w-full"
                            {...register("password", { required: "Password is required" })}
                        />

                        <span
                            className="absolute right-3 top-3 cursor-pointer"
                            onClick={() => setIsShowPassword(!isShowPassword)}
                        >
                            {isShowPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>

                        {errors.password && (
                            <p className="text-red-500">{errors.password.message}</p>
                        )}
                    </div>

                    <button className="btn bg-orange-600 text-white w-full">
                        Login
                    </button>
                </form>

                <div className="my-6 flex items-center gap-2">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <span className="text-gray-400 text-sm">OR</span>
                    <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                <button
                    onClick={handleGoogleLogin}
                    className="btn w-full border flex items-center justify-center gap-2"
                >
                    <FaGoogle className="text-red-500" />
                    Continue with Google
                </button>

                <p className="mt-5 text-center text-sm">
                    Don’t have an account?{" "}
                    <Link href="/register" className="text-orange-600 font-semibold">
                        Register
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default LoginPage;