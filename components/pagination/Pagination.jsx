"use client";

import { useEffect, useRef, useTransition } from "react";
import {
    usePathname,
    useRouter,
    useSearchParams,
} from "next/navigation";

import "./Pagination.css";

export default function Pagination({
    currentPage,
    totalPages,
}) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [isPending, startTransition] = useTransition();

    const shouldScroll = useRef(false);

    const pageParam = searchParams.get("page") || "1";

    useEffect(() => {
        if (!shouldScroll.current) {
            return;
        }

        shouldScroll.current = false;

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                document
                    .getElementById("recipes-section")
                    ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
            });
        });
    }, [pageParam]);

    function changePage(page) {
        if (
            isPending ||
            page < 1 ||
            page > totalPages ||
            page === currentPage
        ) {
            return;
        }

        const params = new URLSearchParams(
            searchParams.toString()
        );

        params.set("page", page);

        shouldScroll.current = true;

        startTransition(() => {
            router.push(
                `${pathname}?${params.toString()}`,
                {
                    scroll: false,
                }
            );
        });
    }

    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className="pagination wow animate__animated animate__fadeInUp">

            <button
                type="button"
                className="pagination-button pagination-arrow"
                onClick={() =>
                    changePage(currentPage - 1)
                }
                disabled={
                    isPending ||
                    currentPage === 1
                }
            >
                ←
                <span>Previous</span>
            </button>

            <div className="pagination-pages">
                {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                ).map((page, index) => (
                    <button
                        type="button"
                        key={page}
                        className={
                            page === currentPage
                                ? "pagination-page active"
                                : "pagination-page"
                        }
                        onClick={() =>
                            changePage(page)
                        }
                        disabled={
                            isPending ||
                            page === currentPage
                        }
                        style={{
                            animationDelay: `${index * 0.08}s`,
                        }}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button
                type="button"
                className="pagination-button pagination-arrow"
                onClick={() =>
                    changePage(currentPage + 1)
                }
                disabled={
                    isPending ||
                    currentPage === totalPages
                }
            >
                <span>Next</span>
                →
            </button>

        </div>
    );
}