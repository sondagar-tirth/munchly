"use client";

import { useEffect, useState } from "react";

import "./FavoriteButton.css";

const STORAGE_KEY = "munchlyFavorites";

export default function FavoriteButton({
    mealId,
    onFavoriteChange,
}) {

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {

        const timer = setTimeout(() => {

            const favorites =
                JSON.parse(
                    localStorage.getItem(STORAGE_KEY)
                ) || [];

            setIsFavorite(
                favorites.includes(mealId)
            );

        }, 0);

        return () => clearTimeout(timer);

    }, [mealId]);

    function handleFavorite(e) {

        e.preventDefault();
        e.stopPropagation();

        const favorites =
            JSON.parse(
                localStorage.getItem(STORAGE_KEY)
            ) || [];

        if (favorites.includes(mealId)) {

            const updatedFavorites =
                favorites.filter(
                    (id) => id !== mealId
                );

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(updatedFavorites)
            );

            setIsFavorite(false);

            if (onFavoriteChange) {
                onFavoriteChange(false);
            }

        } else {

            const updatedFavorites = [
                ...favorites,
                mealId,
            ];

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(updatedFavorites)
            );

            setIsFavorite(true);

            if (onFavoriteChange) {
                onFavoriteChange(true);
            }
        }
    }

    return (
        <button
            type="button"
            className={`favorite-button ${
                isFavorite ? "active" : ""
            }`}
            onClick={handleFavorite}
            aria-label={
                isFavorite
                    ? "Remove from favorites"
                    : "Add to favorites"
            }
        >
            {isFavorite ? "♥" : "♡"}
        </button>
    );
}