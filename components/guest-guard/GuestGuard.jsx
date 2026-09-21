"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function GuestGuard({ children }) {

    const router = useRouter();

    const [isChecking, setIsChecking] = useState(true);
    const [isGuest, setIsGuest] = useState(false);

    useEffect(() => {

        const checkAuth = () => {

            const loggedIn =
                localStorage.getItem("isLoggedIn");

            if (loggedIn === "true") {

                router.replace("/");

            } else {

                setIsGuest(true);
                setIsChecking(false);

            }

        };

        const timer = setTimeout(checkAuth, 0);

        return () => clearTimeout(timer);

    }, [router]);

    if (isChecking) {
        return null;
    }

    if (!isGuest) {
        return null;
    }

    return children;
}