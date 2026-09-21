"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import "./Login.css";

export default function LoginPage() {
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        setError("");

        if (!username.trim() || !password.trim()) {
            setError("Please enter username and password.");
            return;
        }

        if (
            username === "admin" &&
            password === "admin123"
        ) {
            localStorage.setItem("isLoggedIn", "true")
            router.replace("/");
            return;
        }

        setError("Invalid username or password.");
    }

    return (
        <main className="login-page">

            <div className="login-container">

                <div className="login-content">

                    <span className="login-label">
                        WELCOME BACK
                    </span>

                    <h1>
                        Login to
                        <strong> Munchly.</strong>
                    </h1>

                    <p>
                        Sign in to continue discovering
                        delicious recipes.
                    </p>

                    <form
                        className="login-form"
                        onSubmit={handleSubmit}
                    >

                        <div className="login-field">
                            <label htmlFor="username">
                                Username
                            </label>

                            <input
                                id="username"
                                type="text"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                    setError("");
                                }}
                            />
                        </div>

                        <div className="login-field">
                            <label htmlFor="password">
                                Password
                            </label>

                            <div className="login-password-wrapper">

                                <input
                                    id="password"
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setError("");
                                    }}
                                />

                                <button
                                    type="button"
                                    className="login-password-toggle"
                                    onClick={() =>
                                        setShowPassword(
                                            (prev) => !prev
                                        )
                                    }
                                    aria-label={
                                        showPassword
                                            ? "Hide password"
                                            : "Show password"
                                    }
                                >
                                    {showPassword
                                        ? "◉"
                                        : "◌"}
                                </button>

                            </div>
                        </div>

                        {error && (
                            <p className="login-error">
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="login-button"
                        >
                            Login
                        </button>

                    </form>

                    <div className="login-register">
                        <span>
                            Don&apos;t have an account?
                        </span>

                        <Link href="/register">
                            Register
                        </Link>
                    </div>

                </div>

            </div>

        </main>
    );
}