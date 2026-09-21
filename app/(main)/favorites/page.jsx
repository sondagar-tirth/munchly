"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { getMealById } from "@/lib/api/meals";

import FavoriteRecipeCard from "@/components/favorite-recipe-card/FavoriteRecipeCard";

import "./Favorites.css";

const STORAGE_KEY = "munchlyFavorites";
const ITEMS_PER_PAGE = 8;

export default function FavoritesPage() {

    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {

        const timer = setTimeout(() => {

            const loadFavorites = async () => {

                try {

                    const storedFavorites =
                        JSON.parse(
                            localStorage.getItem(STORAGE_KEY)
                        ) || [];

                    if (storedFavorites.length === 0) {

                        setMeals([]);
                        setIsLoading(false);

                        return;
                    }

                    const results =
                        await Promise.all(
                            storedFavorites.map(
                                async (id) => {

                                    const data =
                                        await getMealById(id);

                                    return (
                                        data.meals?.[0] ||
                                        null
                                    );
                                }
                            )
                        );

                    setMeals(
                        results.filter(Boolean)
                    );

                } catch (error) {

                    console.error(
                        "Failed to load favorites:",
                        error
                    );

                    setMeals([]);

                } finally {

                    setIsLoading(false);
                }
            };

            loadFavorites();

        }, 0);

        return () => clearTimeout(timer);

    }, []);


    /* =========================================
       REMOVE FAVORITE
    ========================================= */

    function handleFavoriteChange(
        mealId,
        isFavorite
    ) {

        if (!isFavorite) {

            const updatedMeals =
                meals.filter(
                    (meal) =>
                        meal.idMeal !== mealId
                );

            setMeals(updatedMeals);

            const updatedTotalPages =
                Math.ceil(
                    updatedMeals.length /
                    ITEMS_PER_PAGE
                );

            if (updatedTotalPages === 0) {

                setCurrentPage(1);

            } else if (
                currentPage > updatedTotalPages
            ) {

                setCurrentPage(
                    updatedTotalPages
                );
            }
        }
    }


    /* =========================================
       PAGINATION
    ========================================= */

    const totalPages =
        Math.ceil(
            meals.length /
            ITEMS_PER_PAGE
        );

    const startIndex =
        (currentPage - 1) *
        ITEMS_PER_PAGE;

    const currentMeals =
        meals.slice(
            startIndex,
            startIndex + ITEMS_PER_PAGE
        );


    function handlePageChange(page) {

        setCurrentPage(page);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }


    /* =========================================
       LOADING
    ========================================= */

    if (isLoading) {

        return (
            <main className="favorites-page">

                <section className="favorites-loading">
                    Loading your favorites...
                </section>

            </main>
        );
    }


    return (
        <main className="favorites-page">

            {/* =========================================
                HERO
            ========================================= */}

            <section className="favorites-hero">

                <div className="favorites-hero-inner">

                    <span className="favorites-label">
                        YOUR COLLECTION
                    </span>

                    <h1>
                        My <strong>Favorites.</strong>
                    </h1>

                    <p>
                        Your personal collection of recipes
                        worth making again.
                    </p>

                    <div className="favorites-count">

                        <span>♥</span>

                        {meals.length}{" "}

                        {meals.length === 1
                            ? "Recipe"
                            : "Recipes"}{" "}

                        Saved

                    </div>

                </div>

            </section>


            {/* =========================================
                FAVORITES LIST
            ========================================= */}

            {meals.length > 0 ? (

                <section className="favorites-list-section">

                    <div className="favorites-list">

                        {currentMeals.map((meal) => (

                            <FavoriteRecipeCard
                                key={meal.idMeal}
                                meal={meal}
                                onFavoriteChange={
                                    (isFavorite) =>
                                        handleFavoriteChange(
                                            meal.idMeal,
                                            isFavorite
                                        )
                                }
                            />

                        ))}

                    </div>


                    {/* =========================================
                        PAGINATION
                    ========================================= */}

                    {totalPages > 1 && (

                        <div className="favorites-pagination">

                            {/* PREVIOUS */}

                            <button
                                type="button"
                                disabled={
                                    currentPage === 1
                                }
                                onClick={() =>
                                    handlePageChange(
                                        currentPage - 1
                                    )
                                }
                            >
                                ←
                            </button>


                            {/* PAGE NUMBERS */}

                            {Array.from(
                                {
                                    length: totalPages,
                                },
                                (_, index) =>
                                    index + 1
                            ).map((page) => (

                                <button
                                    key={page}
                                    type="button"
                                    className={
                                        currentPage === page
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() =>
                                        handlePageChange(
                                            page
                                        )
                                    }
                                >
                                    {page}
                                </button>

                            ))}


                            {/* NEXT */}

                            <button
                                type="button"
                                disabled={
                                    currentPage ===
                                    totalPages
                                }
                                onClick={() =>
                                    handlePageChange(
                                        currentPage + 1
                                    )
                                }
                            >
                                →
                            </button>

                        </div>

                    )}

                </section>

            ) : (

                /* =========================================
                   EMPTY STATE
                ========================================= */

                <section className="favorites-empty">

                    <div className="favorites-empty-icon">
                        ♡
                    </div>

                    <span>
                        YOUR COLLECTION IS EMPTY
                    </span>

                    <h2>
                        No favorites yet.
                    </h2>

                    <p>
                        Start exploring recipes and save
                        the ones you want to try later.
                    </p>

                    <Link
                        href="/recipes"
                        className="favorites-explore"
                    >
                        Explore Recipes
                        <span>→</span>
                    </Link>

                </section>

            )}

        </main>
    );
}