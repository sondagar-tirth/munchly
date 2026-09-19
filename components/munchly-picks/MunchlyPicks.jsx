import Link from "next/link";
import "./MunchlyPicks.css";

export default function MunchlyPicks({ meals }) {
    return (
        <section className="munchly-picks">

            <div className="munchly-picks-header">

                <div>
                    <span
                        className="wow animate__animated animate__fadeInUp"
                    >
                        CURATED FOR YOU
                    </span>

                    <h2
                        className="wow animate__animated animate__fadeInUp"
                        data-wow-delay="0.15s"
                    >
                        Munchly <strong>Picks</strong>
                    </h2>
                </div>

                <Link
                    href="/recipes"
                    className="wow animate__animated animate__fadeInRight"
                    data-wow-delay="0.25s"
                >
                    Explore all →
                </Link>

            </div>

            <div className="munchly-picks-grid">

                {meals.map((meal, index) => (
                    <Link
                        key={meal.idMeal}
                        href={`/recipes/${meal.idMeal}`}
                        className="munchly-pick-card wow animate__animated animate__fadeInUp"
                        data-wow-delay={`${0.1 + index * 0.08}s`}
                    >
                        <div className="munchly-pick-image">
                            <img
                                src={meal.strMealThumb}
                                alt={meal.strMeal}
                            />
                        </div>

                        <div className="munchly-pick-content">
                            <span>RECIPE</span>

                            <h3>{meal.strMeal}</h3>
                        </div>
                    </Link>
                ))}

            </div>

        </section>
    );
}