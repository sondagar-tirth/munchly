import "./RecipeGrid.css";
import RecipeCard from "../recipe-card/RecipeCard";

export default function RecipeGrid({ meals, category }) {
    return (
        <div className="recipe-grid">

            {meals.map((meal, index) => (
                <div
                    key={meal.idMeal}
                    className="wow animate__animated animate__fadeInUp"
                    data-wow-delay={`${0.05 + (index % 4) * 0.08}s`}
                    data-wow-duration="0.7s"
                >
                    <RecipeCard
                        meal={meal}
                        category={category}
                    />
                </div>
            ))}

        </div>
    );
}