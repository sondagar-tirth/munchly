import Link from "next/link";
import "./RandomRecipe.css";

export default function RandomRecipe({ meal }) {
    if (!meal) {
        return null;
    }

    return (
        <section className="random-recipe">

            <div
                className="random-recipe-image wow animate__animated animate__fadeInLeft"
                data-wow-duration="0.9s"
            >
                <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                />
            </div>

            <div
                className="random-recipe-content wow animate__animated animate__fadeInRight"
                data-wow-delay="0.2s"
                data-wow-duration="0.9s"
            >

                <span
                    className="wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.35s"
                >
                    NOT SURE WHAT TO COOK?
                </span>

                <h2
                    className="wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.45s"
                >
                    Let Munchly
                    <strong> surprise you.</strong>
                </h2>

                <p
                    className="wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.55s"
                >
                    Discover a delicious recipe you
                    probably wouldn&apos;t have searched for.
                </p>

                <Link
                    href={`/recipes/${meal.idMeal}`}
                    className="random-recipe-button wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.7s"
                >
                    Try this recipe →
                </Link>

            </div>

        </section>
    );
}