import {
    getCategories,
    getDiscoverRecipes,
    getMealsByCategory,
} from "@/lib/api/meals";

import RecipeGrid from "@/components/recipe-grid/RecipeGrid";
import SearchBar from "@/components/search-bar/SearchBar";
import RecipeFilters from "@/components/recipe-filters/RecipeFilters";
import Pagination from "@/components/pagination/Pagination";

import "./Recipes.css";

export default async function RecipesPage({ searchParams }) {

    const params = await searchParams;

    const selectedCategory = params?.category || "";

    const currentPage = Math.max(
        Number(params?.page) || 1,
        1
    );


    const categoryData = await getCategories();

    const categories =
        categoryData.categories?.map(
            (category) => category.strCategory
        ) || [];


    let meals;
    let itemsPerPage;


    if (selectedCategory) {

        const data =
            await getMealsByCategory(
                selectedCategory
            );

        meals =
            (data.meals || []).map(
                (meal) => ({
                    ...meal,
                    strCategory:
                        selectedCategory,
                })
            );

        // 6 rows × 4 cards
        itemsPerPage = 24;

    } else {

        meals =
            await getDiscoverRecipes();

        // 3 rows × 4 cards
        itemsPerPage = 12;
    }


    const totalPages =
        Math.ceil(
            meals.length / itemsPerPage
        );


    const validPage =
        Math.min(
            currentPage,
            Math.max(totalPages, 1)
        );


    const startIndex =
        (validPage - 1) *
        itemsPerPage;


    const visibleMeals =
        meals.slice(
            startIndex,
            startIndex + itemsPerPage
        );


    return (
        <main className="recipes-page">

            {/* =========================================
                FLOATING BACKGROUND DECORATION
            ========================================= */}

            <div
                className="recipes-decoration"
                aria-hidden="true"
            >

                <span className="recipes-spark spark-1">
                    ✦
                </span>

                <span className="recipes-spark spark-2">
                    ✧
                </span>

                <span className="recipes-heart heart-1">
                    ♡
                </span>

                <span className="recipes-heart heart-2">
                    ♡
                </span>

                <span className="recipes-leaf leaf-1">
                    ❧
                </span>

                <span className="recipes-leaf leaf-2">
                    ❧
                </span>

                <span className="recipes-dot dot-1"></span>
                <span className="recipes-dot dot-2"></span>
                <span className="recipes-dot dot-3"></span>

                <div className="recipes-orbit"></div>

            </div>


            {/* =========================================
                HERO
            ========================================= */}

            <section className="recipes-hero">

                <div className="recipes-hero-content">

                    <span
                        className="wow animate__animated animate__fadeInUp"
                    >
                        EXPLORE MUNCHLY
                    </span>

                    <h1
                        className="wow animate__animated animate__fadeInUp"
                        data-wow-delay="0.15s"
                    >
                        Find something
                        <strong>
                            delicious.
                        </strong>
                    </h1>

                    <p
                        className="wow animate__animated animate__fadeInUp"
                        data-wow-delay="0.3s"
                    >
                        Discover recipes from different
                        flavours, cuisines and categories.
                    </p>

                    <div
                        className="wow animate__animated animate__fadeInUp"
                        data-wow-delay="0.45s"
                    >
                        <SearchBar />
                    </div>

                </div>


                {/* SMALL HERO DECORATIONS */}

                <div
                    className="recipes-hero-doodle doodle-left"
                    aria-hidden="true"
                >
                    <span>✦</span>
                    <span>·</span>
                    <span>♡</span>
                </div>

                <div
                    className="recipes-hero-doodle doodle-right"
                    aria-hidden="true"
                >
                    <span>✧</span>
                    <span>·</span>
                    <span>✦</span>
                </div>

            </section>


            {/* =========================================
                RECIPES
            ========================================= */}

            <section
                className="recipes-section"
                id="recipes-section"
            >

                <div className="recipes-section-header">

                    <div>

                        <span
                            className="wow animate__animated animate__fadeInUp"
                        >
                            {selectedCategory
                                ? "CATEGORY RECIPES"
                                : "CURATED FOR YOU"}
                        </span>

                        <h2
                            className="wow animate__animated animate__fadeInUp"
                            data-wow-delay="0.12s"
                        >
                            {selectedCategory ||
                                "Explore recipes"}
                        </h2>

                    </div>

                    <p
                        className="wow animate__animated animate__fadeIn"
                        data-wow-delay="0.2s"
                    >
                        {meals.length} recipes
                    </p>

                </div>


                <div
                    className="wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.25s"
                >
                    <RecipeFilters
                        categories={categories}
                        selectedCategory={selectedCategory}
                    />
                </div>


                {visibleMeals.length > 0 ? (
                    <>

                        <div
                            className="wow animate__animated animate__fadeInUp"
                            data-wow-delay="0.3s"
                        >
                            <RecipeGrid
                                meals={visibleMeals}
                            />
                        </div>


                        <div
                            className="wow animate__animated animate__fadeInUp"
                            data-wow-delay="0.4s"
                        >
                            <Pagination
                                currentPage={validPage}
                                totalPages={totalPages}
                            />
                        </div>

                    </>
                ) : (

                    <div className="recipes-empty wow animate__animated animate__fadeInUp">

                        <div className="recipes-empty-icon">
                            ♡
                        </div>

                        <h3>
                            No recipes found
                        </h3>

                        <p>
                            Try another category.
                        </p>

                    </div>

                )}

            </section>

        </main>
    );
}