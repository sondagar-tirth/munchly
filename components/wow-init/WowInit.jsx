"use client";

import { useEffect } from "react";
import "animate.css";

export default function WowInit() {
    useEffect(() => {
        let mounted = true;

        async function initWow() {
            const { WOW } = await import("wowjs");

            if (!mounted) return;

            const wow = new WOW({
                live: false,
                offset: 80,
                mobile: true,
            });

            wow.init();
        }

        initWow();

        return () => {
            mounted = false;
        };
    }, []);

    return null;
}