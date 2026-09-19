import Link from "next/link";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer wow animate__animated animate__fadeInUp">

            <div className="footer-main">

                <div
                    className="footer-brand wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.1s"
                >
                    <Link
                        href="/"
                        className="footer-logo"
                    >
                        Munch<span>ly</span>
                    </Link>

                    <p>
                        Discover delicious recipes,
                        explore new flavours and find
                        something worth cooking.
                    </p>

                    <Link
                        href="/search"
                        className="footer-cta"
                    >
                        Find a recipe
                        <span>→</span>
                    </Link>
                </div>

                <div
                    className="footer-column wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.2s"
                >
                    <h3>Explore</h3>

                    <Link href="/">Home</Link>
                    <Link href="/recipes">Recipes</Link>
                    <Link href="/categories">
                        Categories
                    </Link>
                    <Link href="/search">Search</Link>
                </div>

                <div
                    className="footer-column wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.3s"
                >
                    <h3>Discover</h3>

                    <Link href="/recipes?category=Vegetarian">
                        Vegetarian
                    </Link>

                    <Link href="/recipes?category=Chicken">
                        Chicken
                    </Link>

                    <Link href="/recipes?category=Seafood">
                        Seafood
                    </Link>

                    <Link href="/recipes?category=Dessert">
                        Desserts
                    </Link>
                </div>

                <div
                    className="footer-column footer-about wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.4s"
                >
                    <h3>Made for food lovers</h3>

                    <p>
                        A little place to discover
                        recipes, ingredients and
                        inspiration for your next meal.
                    </p>
                </div>

            </div>

            <div
                className="footer-bottom wow animate__animated animate__fadeIn"
                data-wow-delay="0.5s"
            >

                <p>
                    © 2026 Munchly. All rights reserved.
                </p>

                <div className="footer-bottom-links">
                    <span>Powered by</span>

                    <a
                        href="https://www.themealdb.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        TheMealDB
                    </a>
                </div>

            </div>

        </footer>
    );
}