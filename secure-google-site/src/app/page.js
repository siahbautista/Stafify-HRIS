"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        // Redirect the user to your Google Site immediately
        router.replace("siahbautista.com");
    }, [router]);

    return <h2>Redirecting...</h2>; // Temporary text before redirect
}
