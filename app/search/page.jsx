import { getCategories, searchMeals } from "@/lib/api/meals";

import RecipeGrid from "@/components/recipe-grid/RecipeGrid";
import SearchResultsHeader from "@/components/search-results-header/SearchResultsHeader";
import SearchBar from "@/components/search-bar/SearchBar";

import "./Search.css";

export default async function SearchPage({ searchParams }) {
    const params = await searchParams;

    const query = params?.q || "";

    if (query) {
        const data = await searchMeals(query);

        const meals = data.meals || [];

        return (
            <main className="search-page search-results-page">

                <section className="search-results-top">

                    <div className="search-results-inner">

                        <div
                            className="wow animate__animated animate__fadeInUp"
                            data-wow-duration="0.8s"
                        >
                            <SearchResultsHeader
                                query={query}
                                count={meals.length}
                            />
                        </div>

                        <div
                            className="search-results-bar wow animate__animated animate__fadeInUp"
                            data-wow-delay="0.15s"
                        >
                            <SearchBar />
                        </div>

                    </div>

                </section>

                {meals.length > 0 ? (
                    <RecipeGrid meals={meals} />
                ) : (
                    <section className="search-no-results">

                        <div
                            className="no-results-icon wow animate__animated animate__fadeInUp"
                        >
                            🍽️
                        </div>

                        <h2
                            className="wow animate__animated animate__fadeInUp"
                            data-wow-delay="0.15s"
                        >
                            Nothing delicious found.
                        </h2>

                        <p
                            className="wow animate__animated animate__fadeInUp"
                            data-wow-delay="0.3s"
                        >
                            Try searching for another
                            recipe, ingredient or cuisine.
                        </p>

                        <div
                            className="wow animate__animated animate__fadeInUp"
                            data-wow-delay="0.45s"
                        >
                            <SearchBar />
                        </div>

                    </section>
                )}

            </main>
        );
    }

    const categoryData = await getCategories();

    const categories =
        categoryData.categories || [];

    const floatingCategories =
        categories.slice(0, 8);

    return (
        <main className="search-page">

            <section className="search-discovery">

                <div className="search-glow"></div>

                <div className="search-food-orbit">

                    {floatingCategories.map(
                        (category, index) => (
                            <div
                                className={`floating-food food-${index + 1} wow animate__animated animate__fadeIn`}
                                data-wow-delay={`${0.1 + index * 0.08}s`}
                                key={category.idCategory}
                            >
                                <img
                                    src={
                                        category.strCategoryThumb
                                    }
                                    alt={
                                        category.strCategory
                                    }
                                />

                                <span>
                                    {category.strCategory}
                                </span>
                            </div>
                        )
                    )}

                </div>

                <div className="search-center">

                    <div
                        className="search-center-badge wow animate__animated animate__fadeInDown"
                    >
                        DISCOVER SOMETHING DELICIOUS
                    </div>

                    <h1
                        className="wow animate__animated animate__fadeInUp"
                        data-wow-delay="0.2s"
                    >
                        What are you
                        <strong> craving?</strong>
                    </h1>

                    <p
                        className="wow animate__animated animate__fadeInUp"
                        data-wow-delay="0.35s"
                    >
                        Search thousands of recipes and
                        find your next favourite dish.
                    </p>

                    <div
                        className="wow animate__animated animate__fadeInUp"
                        data-wow-delay="0.5s"
                    >
                        <SearchBar />
                    </div>

                    <div
                        className="search-suggestions wow animate__animated animate__fadeInUp"
                        data-wow-delay="0.65s"
                    >
                        <span>Try:</span>
                        <span>Chicken</span>
                        <span>Pasta</span>
                        <span>Dessert</span>
                        <span>Pizza</span>
                    </div>

                </div>

                <div
                    className="search-scroll-hint wow animate__animated animate__fadeIn"
                    data-wow-delay="0.9s"
                >
                    <span></span>
                    Explore your cravings
                </div>

            </section>

        </main>
    );
}