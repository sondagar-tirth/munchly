import Link from "next/link";

import FavoriteButton from "@/components/favorite-button/FavoriteButton";

import "./FavoriteRecipeCard.css";

export default function FavoriteRecipeCard({
    meal,
    onFavoriteChange,
}) {
    return (
        <article className="favorite-recipe-card">

            <Link
                href={`/recipes/${meal.idMeal}`}
                className="favorite-recipe-image"
            >
                <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                />
            </Link>

            <div className="favorite-recipe-content">

                <div className="favorite-recipe-top">

                    <span className="favorite-recipe-category">
                        {meal.strCategory || "Recipe"}
                    </span>

                    <FavoriteButton
                        mealId={meal.idMeal}
                        onFavoriteChange={onFavoriteChange}
                    />

                </div>

                <Link
                    href={`/recipes/${meal.idMeal}`}
                    className="favorite-recipe-title"
                >
                    <h2>{meal.strMeal}</h2>
                </Link>

                <p className="favorite-recipe-area">
                    {meal.strArea || "Worldwide"} cuisine
                </p>

                <div className="favorite-recipe-bottom">

                    <span>
                        Saved to your favorites
                    </span>

                    <Link
                        href={`/recipes/${meal.idMeal}`}
                        className="favorite-recipe-view"
                    >
                        View Recipe
                        <span>→</span>
                    </Link>

                </div>

            </div>

        </article>
    );
}