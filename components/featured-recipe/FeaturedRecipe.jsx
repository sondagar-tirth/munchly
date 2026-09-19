import Link from "next/link";
import "./FeaturedRecipe.css";

export default function FeaturedRecipe({ meal }) {
    return (
        <section className="featured-recipe">

            <div
                className="featured-recipe-image wow animate__animated animate__fadeInLeft"
                data-wow-duration="0.9s"
            >
                <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                />
            </div>

            <div
                className="featured-recipe-content wow animate__animated animate__fadeInRight"
                data-wow-delay="0.2s"
                data-wow-duration="0.9s"
            >
                <span
                    className="wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.35s"
                >
                    Recipe of the Moment
                </span>

                <h2
                    className="wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.45s"
                >
                    {meal.strMeal}
                </h2>

                <p
                    className="wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.55s"
                >
                    {meal.strCategory} · {meal.strArea}
                </p>

                <p
                    className="featured-description wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.65s"
                >
                    Discover a delicious recipe and bring something
                    special to your table today.
                </p>

                <Link
                    href="/recipes"
                    className="wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.75s"
                >
                    <button>
                        Explore Recipe
                    </button>
                </Link>

            </div>

        </section>
    );
}