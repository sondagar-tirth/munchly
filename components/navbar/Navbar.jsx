"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import "./Navbar.css";

export default function Navbar() {

    const router = useRouter();

    function handleLogout() {
        localStorage.removeItem("isLoggedIn");

        router.replace("/login");
    }

    return (
        <header className="navbar wow animate__animated animate__fadeInDown">

            <div className="navbar-container">

                <Link
                    href="/"
                    className="navbar-logo wow animate__animated animate__fadeIn"
                    data-wow-delay="0.2s"
                >
                    Munch<span>ly</span>
                </Link>

                <nav className="navbar-links">

                    <Link
                        href="/"
                        className="wow animate__animated animate__fadeInDown"
                        data-wow-delay="0.3s"
                    >
                        Home
                    </Link>

                    <Link
                        href="/recipes"
                        className="wow animate__animated animate__fadeInDown"
                        data-wow-delay="0.4s"
                    >
                        Recipes
                    </Link>

                    <Link
                        href="/categories"
                        className="wow animate__animated animate__fadeInDown"
                        data-wow-delay="0.5s"
                    >
                        Categories
                    </Link>

                </nav>

                <div className="navbar-actions">

                    <Link
                        href="/search"
                        className="navbar-search wow animate__animated animate__fadeIn"
                        data-wow-delay="0.6s"
                    >
                        Search
                    </Link>

                    <button
                        type="button"
                        className="navbar-logout wow animate__animated animate__fadeIn"
                        data-wow-delay="0.7s"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </div>

            </div>

        </header>
    );
}