import Link from "next/link";
import { getMealById } from "@/lib/api/meals";
import "./RecipeDetails.css";

export default async function RecipeDetailsPage({ params }) {
    const { id } = await params;

    const data = await getMealById(id);
    const meal = data.meals?.[0];

    if (!meal) {
        return (
            <main className="recipe-not-found">

                <h1 className="wow animate__animated animate__fadeInUp">
                    Recipe not found
                </h1>

                <p
                    className="wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.15s"
                >
                    We couldn&apos;t find the recipe you&apos;re looking for.
                </p>

                <Link
                    href="/recipes"
                    className="wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.3s"
                >
                    ← Back to Recipes
                </Link>

            </main>
        );
    }

    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];

        if (ingredient?.trim()) {
            ingredients.push({
                ingredient: ingredient.trim(),
                measure: measure?.trim() || "",
            });
        }
    }

    return (
        <main className="recipe-details">

            {/* HERO */}

            <section className="recipe-detail-hero">

                <div
                    className="recipe-detail-image wow animate__animated animate__fadeInLeft"
                    data-wow-duration="0.9s"
                >
                    <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                    />
                </div>

                <div
                    className="recipe-detail-info wow animate__animated animate__fadeInRight"
                    data-wow-delay="0.15s"
                    data-wow-duration="0.9s"
                >

                    <Link
                        href="/recipes"
                        className="recipe-back wow animate__animated animate__fadeInUp"
                        data-wow-delay="0.3s"
                    >
                        ← Back to Recipes
                    </Link>

                    <br />

                    <span
                        className="recipe-detail-category wow animate__animated animate__fadeInUp"
                        data-wow-delay="0.4s"
                    >
                        {meal.strCategory}
                    </span>

                    <h1
                        className="wow animate__animated animate__fadeInUp"
                        data-wow-delay="0.5s"
                    >
                        {meal.strMeal}
                    </h1>

                    <p
                        className="recipe-area wow animate__animated animate__fadeInUp"
                        data-wow-delay="0.6s"
                    >
                        {meal.strArea} Cuisine
                    </p>

                    {meal.strTags && (
                        <div
                            className="recipe-tags wow animate__animated animate__fadeInUp"
                            data-wow-delay="0.7s"
                        >
                            {meal.strTags
                                .split(",")
                                .slice(0, 4)
                                .map((tag) => (
                                    <span key={tag}>
                                        #{tag.trim()}
                                    </span>
                                ))}
                        </div>
                    )}

                </div>

            </section>

            {/* CONTENT */}

            <section className="recipe-detail-content">

                {/* INGREDIENTS */}

                <div className="ingredients-section">

                    <div className="section-heading">

                        <span className="wow animate__animated animate__fadeInUp">
                            WHAT YOU NEED
                        </span>

                        <h2
                            className="wow animate__animated animate__fadeInUp"
                            data-wow-delay="0.15s"
                        >
                            Ingredients
                        </h2>

                    </div>

                    <div className="ingredients-list">

                        {ingredients.map((item, index) => (
                            <div
                                className="ingredient-item wow animate__animated animate__fadeInUp"
                                data-wow-delay={`${0.05 + (index % 6) * 0.07}s`}
                                key={index}
                            >
                                <span className="ingredient-number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span className="ingredient-name">
                                    {item.ingredient}
                                </span>

                                <span className="ingredient-measure">
                                    {item.measure}
                                </span>
                            </div>
                        ))}

                    </div>

                </div>

                {/* INSTRUCTIONS */}

                <div className="instructions-section">

                    <div className="section-heading">

                        <span className="wow animate__animated animate__fadeInUp">
                            THE METHOD
                        </span>

                        <h2
                            className="wow animate__animated animate__fadeInUp"
                            data-wow-delay="0.15s"
                        >
                            How to make it
                        </h2>

                    </div>

                    <div className="instructions">

                        {(() => {
                            let stepNumber = 0;

                            return meal.strInstructions
                                ?.split(/\r?\n/)
                                .filter((step) => step.trim())
                                .map((step, index) => {

                                    const text = step.trim();

                                    if (/^STEP\s+\d+/i.test(text)) {
                                        return null;
                                    }

                                    stepNumber++;

                                    return (
                                        <div
                                            className="instruction-item wow animate__animated animate__fadeInUp"
                                            data-wow-delay={`${0.05 + (stepNumber - 1) * 0.08}s`}
                                            key={index}
                                        >
                                            <div className="instruction-index">
                                                {String(stepNumber).padStart(2, "0")}
                                            </div>

                                            <div className="instruction-line"></div>

                                            <p>
                                                {text}
                                            </p>
                                        </div>
                                    );
                                });

                        })()}

                    </div>

                </div>

            </section>

            {/* YOUTUBE */}

            {meal.strYoutube && (
                <section className="recipe-video">

                    <div className="section-heading">

                        <span className="wow animate__animated animate__fadeInUp">
                            WATCH IT IN ACTION
                        </span>

                        <h2
                            className="wow animate__animated animate__fadeInUp"
                            data-wow-delay="0.15s"
                        >
                            Follow along
                        </h2>

                    </div>

                    <a
                        href={meal.strYoutube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="youtube-button wow animate__animated animate__fadeInUp"
                        data-wow-delay="0.3s"
                    >
                        Watch on YouTube ↗
                    </a>

                </section>
            )}

        </main>
    );
}