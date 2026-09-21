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


            {/* =========================================
                CUTE HERO VISUAL
            ========================================= */}

            <div
                className="hero-visual wow animate__animated animate__fadeIn"
                data-wow-delay="0.4s"
            >

                <div className="hero-visual-glow"></div>


                {/* FLOATING SPARKLES */}

                <span className="hero-sparkle sparkle-one">
                    ✦
                </span>

                <span className="hero-sparkle sparkle-two">
                    ✦
                </span>

                <span className="hero-sparkle sparkle-three">
                    ✧
                </span>


                {/* MAIN FOOD */}

                <div className="hero-food">

                    <div className="hero-food-shadow"></div>

                    <div className="hero-food-plate">

                        <div className="hero-food-inner">

                            <div className="hero-food-content">
                                🍝
                            </div>

                        </div>

                    </div>

                </div>


                {/* FLOATING YUM */}

                <div className="hero-float-card hero-yum">

                    <span>
                        ♡
                    </span>

                    <div>
                        <strong>
                            Yum!
                        </strong>

                        <small>
                            Something tasty
                        </small>
                    </div>

                </div>


                {/* FLOATING FRESH */}

                <div className="hero-float-card hero-fresh">

                    <span className="hero-fresh-dot"></span>

                    <div>
                        <strong>
                            Fresh
                        </strong>

                        <small>
                            Made with love
                        </small>
                    </div>

                </div>


                {/* SMALL HEART */}

                <div className="hero-heart">
                    ♥
                </div>

            </div>

        </section>
    );
}