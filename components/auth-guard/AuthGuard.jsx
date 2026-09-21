"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({ children }) {

    const router = useRouter();

    const [isChecking, setIsChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

        const checkAuth = () => {

            const loggedIn =
                localStorage.getItem("isLoggedIn");

            console.log("Auth status:", loggedIn);

            if (loggedIn === "true") {
                setIsLoggedIn(true);
                setIsChecking(false);
            } else {
                router.replace("/login");
            }

        };

        const timer = setTimeout(checkAuth, 0);

        return () => clearTimeout(timer);

    }, [router]);

    if (isChecking) {
        return null;
    }

    if (!isLoggedIn) {
        return null;
    }

    return children;
}