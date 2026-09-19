"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./SearchBar.css";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const router = useRouter();

    function handleSearch(e) {
        e.preventDefault();

        if (!query.trim()) return;

        router.push(
            `/search?q=${encodeURIComponent(query.trim())}`
        );
    }

    return (
        <form
            className="search-bar wow animate__animated animate__fadeInUp"
            onSubmit={handleSearch}
        >
            <input
                type="text"
                placeholder="Search Recipes, Ingredients...."
                value={query}
                onChange={(e) =>
                    setQuery(e.target.value)
                }
            />

            <button type="submit">
                Search
            </button>
        </form>
    );
}