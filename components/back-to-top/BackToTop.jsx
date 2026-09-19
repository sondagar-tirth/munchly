"use client";

import { useEffect, useState } from "react";
import "./BackToTop.css";

export default function BackToTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setShowButton(window.scrollY > 400);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    if (!showButton) {
        return null;
    }

    return (
        <button
            className="back-to-top wow animate__animated animate__fadeInUp"
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            <span>↑</span>
        </button>
    );
}