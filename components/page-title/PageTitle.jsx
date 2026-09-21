"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const faviconFrames = [
    `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path
            d="M18 78V28C18 22 26 20 31 27L50 55L69 27C74 20 82 22 82 28V78"
            fill="none"
            stroke="#e85d04"
            stroke-width="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />

        <path
            d="M78 -2
               C81 13 87 19 102 22
               C87 25 81 31 78 46
               C75 31 69 25 54 22
               C69 19 75 13 78 -2Z"
            fill="#ff8a3d"
        />
    </svg>
    `,

    `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path
            d="M18 78V28C18 22 26 20 31 27L50 55L69 27C74 20 82 22 82 28V78"
            fill="none"
            stroke="#e85d04"
            stroke-width="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />

        <path
            d="M78 -10
               C82 10 89 18 108 22
               C89 26 82 34 78 54
               C74 34 67 26 48 22
               C67 18 74 10 78 -10Z"
            fill="#ff8a3d"
        />
    </svg>
    `,

    `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path
            d="M18 78V28C18 22 26 20 31 27L50 55L69 27C74 20 82 22 82 28V78"
            fill="none"
            stroke="#e85d04"
            stroke-width="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />

        <path
            d="M78 -2
               C81 13 87 19 102 22
               C87 25 81 31 78 46
               C75 31 69 25 54 22
               C69 19 75 13 78 -2Z"
            fill="#ff8a3d"
            opacity="0.45"
        />
    </svg>
    `,
];

function createFaviconData(svg) {
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export default function PageTitle() {

    const pathname = usePathname();

    useEffect(() => {

        let pageName = "Home";

        if (pathname === "/") {
            pageName = "Home";
        } else if (pathname === "/recipes") {
            pageName = "Recipes";
        } else if (pathname.startsWith("/recipes/")) {
            pageName = "Recipe Details";
        } else if (pathname === "/categories") {
            pageName = "Categories";
        } else if (pathname === "/search") {
            pageName = "Search";
        } else if (pathname === "/favorites") {
            pageName = "My Favorites";
        } else if (pathname === "/login") {
            pageName = "Login";
        } else if (pathname === "/register") {
            pageName = "Register";
        }

        document.title = `Munchly | ${pageName}`;

    }, [pathname]);


    useEffect(() => {

        const oldFavicons =
            document.querySelectorAll(
                'link[rel="icon"]'
            );

        oldFavicons.forEach((favicon) => {
            favicon.remove();
        });

        const favicon =
            document.createElement("link");

        favicon.rel = "icon";
        favicon.type = "image/svg+xml";

        document.head.appendChild(favicon);


        let frame = 0;

        const updateFavicon = () => {

            favicon.href =
                createFaviconData(
                    faviconFrames[frame]
                );

            frame =
                (frame + 1) %
                faviconFrames.length;
        };


        updateFavicon();

        const animation =
            setInterval(
                updateFavicon,
                700
            );


        return () => {

            clearInterval(animation);

            favicon.remove();

        };

    }, []);

    return null;
}