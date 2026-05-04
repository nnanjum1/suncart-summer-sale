import dns from "node:dns"
dns.setServers(["8.8.8.8", "8.8.4.4"])

import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if (session) {
        return NextResponse.next()

    } else {
        const loginUrl = new URL("/login", request.url);


        loginUrl.searchParams.set("redirect", request.nextUrl.pathname);

        return NextResponse.redirect(loginUrl);
    }
}

export const config = {
    matcher: ['/career', '/products/:path*'],
}