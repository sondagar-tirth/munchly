import Link from "next/link";
import "./RecipeCard.css";

export default function RecipeCard({ meal, category }) {
    return (
        <Link
            href={`/recipes/${meal.idMeal}`}
            className="recipe-card"
        >
            <div className="recipe-card-image">
                <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                />
            </div>

            <div className="recipe-card-content">

                <span className="recipe-card-category">
                    {category || meal.strCategory}
                </span>

                <h2>
                    {meal.strMeal}
                </h2>

                <p>
                    {meal.strArea || "Worldwide"}
                </p>

            </div>
        </Link>
    );
}