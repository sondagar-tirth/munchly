import Link from "next/link";
import "./Hero.css";
import SearchBar from "../search-bar/SearchBar";

export default function Hero() {
    return (
        <section className="hero wow animate__animated animate__fadeIn">

            <div className="hero-content">

                <span
                    className="hero-label wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.2s"
                >
                    GOOD FOOD, GOOD MOOD
                </span>

                <h1
                    className="wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.35s"
                >
                    Discover something
                    <span> delicious.</span>
                </h1>

                <p
                    className="wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.5s"
                >
                    Explore delicious recipes from around the world
                    and find your next favorite meal.
                </p>

                <div
                    className="wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.65s"
                >
                    <SearchBar />
                </div>

                <Link
                    href="/recipes"
                    className="hero-button wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.8s"
                >
                    Explore Recipes
                </Link>

            </div>

        </section>
    );
}