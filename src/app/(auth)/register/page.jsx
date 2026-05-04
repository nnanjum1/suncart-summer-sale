"use client";

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleRegisterFunc = async (data) => {
        const { email, name, photo, password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,
            callbackURL: "/",
        });

        if (error) {
            alert(error.message);
            return;
        }

        if (res) {
            alert("Signup successful!");
        }
    };

    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/", // Redirects to home page upon success
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FFFBEB] p-4">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-orange-100">

                <h2 className="text-3xl font-extrabold text-center text-orange-600 mb-6">
                    Create Account
                </h2>

                <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>

                    {/* Name */}
                    <div>
                        <input
                            type="text"
                            placeholder="Full name"
                            className="input input-bordered w-full focus:border-orange-500"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Photo URL */}
                    <div>
                        <input
                            type="text"
                            placeholder="Photo URL"
                            className="input input-bordered w-full focus:border-orange-500"
                            {...register("photo", { required: "Photo URL is required" })}
                        />
                        {errors.photo && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.photo.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            placeholder="Email address"
                            className="input input-bordered w-full focus:border-orange-500"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <input
                            type={isShowPassword ? "text" : "password"}
                            placeholder="Password"
                            className="input input-bordered w-full focus:border-orange-500"
                            {...register("password", { required: "Password is required" })}
                        />
                        <span
                            className="absolute right-3 top-3 cursor-pointer text-gray-500"
                            onClick={() => setIsShowPassword(!isShowPassword)}
                        >
                            {isShowPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <button className="btn bg-orange-600 hover:bg-orange-700 text-white w-full font-bold mt-2">
                        Register
                    </button>
                </form>

                {/* Divider */}
                <div className="my-6 flex items-center gap-2">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <span className="text-gray-400 text-sm">OR</span>
                    <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                {/* Google Sign In */}
                <button
                    onClick={handleGoogleLogin}
                    className="btn w-full bg-white border border-gray-300 hover:bg-gray-50 flex items-center gap-2 justify-center"
                >
                    <FaGoogle className="text-red-500" />
                    Continue with Google
                </button>

                <p className="mt-5 text-center text-sm">
                    Already have an account?{" "}
                    <Link href="/login" className="text-orange-600 font-semibold">
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default RegisterPage;