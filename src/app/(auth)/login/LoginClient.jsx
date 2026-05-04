"use client";

import { useSearchParams } from "next/navigation";
import LoginPage from "./page";

export default function LoginClient() {
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirect") || "/";

    return <LoginPage redirectTo={redirectTo} />;
}