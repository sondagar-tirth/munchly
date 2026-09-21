import { getCategories, getMealsByCategory } from "@/lib/api/meals";
import RecipeGrid from "@/components/recipe-grid/RecipeGrid";
import Link from "next/link";
import "./Categories.css";

export default async function CategoriesPage({ searchParams }) {
    const params = await searchParams;
    const selectedCategory = params?.category || "";

    if (selectedCategory) {
        const data = await getMealsByCategory(selectedCategory);
        const meals = data.meals || [];

        return (
            <main className="categories-page">

                <section className="category-result-header">

                    <Link
                        href="/categories"
                        className="back-link wow animate__animated animate__fadeInLeft"
                    >
                        ← All Categories
                    </Link>

                    <br />

                    <span className="wow animate__animated animate__fadeInUp">
                        EXPLORE CATEGORY
                    </span>

                    <h1
                        className="wow animate__animated animate__fadeInUp"
                        data-wow-delay="0.15s"
                    >
                        {selectedCategory}
                    </h1>

                    <p
                        className="wow animate__animated animate__fadeInUp"
                        data-wow-delay="0.3s"
                    >
                        Discover delicious{" "}
                        {selectedCategory.toLowerCase()} recipes.
                    </p>

                </section>

                {meals.length > 0 ? (
                    <RecipeGrid
                        meals={meals}
                        category={selectedCategory}
                    />
                ) : (
                    <div className="category-empty">

                        <h2 className="wow animate__animated animate__fadeInUp">
                            No recipes found
                        </h2>

                        <p
                            className="wow animate__animated animate__fadeInUp"
                            data-wow-delay="0.15s"
                        >
                            We couldn&apos;t find recipes for this category.
                        </p>

                    </div>
                )}

            </main>
        );
    }

    // =========================
    // ALL CATEGORIES
    // =========================

    const data = await getCategories();
    const categories = data.categories || [];

    return (
        <main className="categories-page">

            <section className="categories-hero">

                <span className="wow animate__animated animate__fadeInUp">
                    EXPLORE MUNCHLY
                </span>

                <h1
                    className="wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.15s"
                >
                    Find your perfect
                    <strong> flavour.</strong>
                </h1>

                <p
                    className="wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.3s"
                >
                    Explore recipes by category and discover
                    something delicious to cook today.
                </p>

            </section>

            <section className="categories-list">

                {categories.map((category, index) => (
                    <Link
                        key={category.idCategory}
                        href={`/categories?category=${encodeURIComponent(
                            category.strCategory
                        )}`}
                        className="category-page-card wow animate__animated animate__fadeInUp"
                        data-wow-delay={`${0.05 + (index % 4) * 0.08}s`}
                    >
                        <img
                            src={category.strCategoryThumb}
                            alt={category.strCategory}
                        />

                        <div className="category-page-overlay">

                            <span>
                                RECIPES
                            </span>

                            <h2>
                                {category.strCategory}
                            </h2>

                            <p>
                                Explore →
                            </p>

                        </div>

                    </Link>
                ))}

            </section>

        </main>
    );
}