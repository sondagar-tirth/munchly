import Link from "next/link";
import "./ExploreCuisine.css";

export default function ExploreCuisine({ cuisines }) {
    return (
        <section className="explore-cuisine">

            <div className="explore-cuisine-header">
                <div>
                    <span>EXPLORE THE WORLD</span>

                    <h2>
                        Flavours from
                        <strong> around the world.</strong>
                    </h2>
                </div>

                <Link href="/recipes">
                    Explore recipes →
                </Link>
            </div>

            <div className="cuisine-grid">
                {cuisines.map((cuisine) => {
                    const previewMeal = cuisine.meals?.[0];

                    return (
                        <Link
                            key={cuisine.area}
                            href={`/recipes?area=${encodeURIComponent(
                                cuisine.area
                            )}`}
                            className="cuisine-card"
                        >
                            {previewMeal && (
                                <img
                                    src={previewMeal.strMealThumb}
                                    alt={cuisine.area}
                                />
                            )}

                            <div className="cuisine-overlay">
                                <span>CUISINE</span>

                                <h3>{cuisine.area}</h3>

                                <p>
                                    Explore recipes →
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>

        </section>
    );
}