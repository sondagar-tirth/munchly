"use client";

import { useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import "./RecipeFilters.css";

export default function RecipeFilters({
    categories,
    selectedCategory,
}) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const filtersRef = useRef(null);

    function handleCategoryChange(category) {
        const params = new URLSearchParams(
            searchParams.toString()
        );

        if (category) {
            params.set("category", category);
            params.set("page", "1");
        } else {
            params.delete("category");
            params.delete("page");
        }

        router.push(`/recipes?${params.toString()}`, {
            scroll: false,
        });

        setTimeout(() => {
            document
                .getElementById("recipes-section")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
        }, 100);
    }

    function slideFilters(direction) {
        if (!filtersRef.current) return;

        filtersRef.current.scrollBy({
            left: direction * 250,
            behavior: "smooth",
        });
    }

    return (
        <div className="recipe-filters-wrapper">

            <button
                type="button"
                className="filter-arrow filter-arrow-left wow animate__animated animate__fadeIn"
                data-wow-delay="0.1s"
                onClick={() => slideFilters(-1)}
                aria-label="Previous filters"
            >
                ←
            </button>

            <div
                className="recipe-filters"
                ref={filtersRef}
            >
                <button
                    type="button"
                    onClick={() =>
                        handleCategoryChange("")
                    }
                    className={!selectedCategory ? "active" : ""}
                >
                    All
                </button>

                <button
                    type="button"
                    onClick={() =>
                        handleCategoryChange("Vegetarian")
                    }
                    className={
                        selectedCategory === "Vegetarian"
                            ? "active veg-filter"
                            : "veg-filter"
                    }
                >
                    <span>●</span>
                    Veg
                </button>

                {categories
                    .filter(
                        (category) =>
                            category !== "Vegetarian"
                    )
                    .map((category, index) => (
                        <button
                            type="button"
                            key={category}
                            onClick={() =>
                                handleCategoryChange(category)
                            }
                            className={
                                selectedCategory === category
                                    ? "active"
                                    : ""
                            }
                            style={{
                                animationDelay: `${0.15 + index * 0.05}s`,
                            }}
                        >
                            {category}
                        </button>
                    ))}
            </div>

            <button
                type="button"
                className="filter-arrow filter-arrow-right wow animate__animated animate__fadeIn"
                data-wow-delay="0.2s"
                onClick={() => slideFilters(1)}
                aria-label="Next filters"
            >
                →
            </button>

        </div>
    );
}