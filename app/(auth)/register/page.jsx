"use client";

import Link from "next/link";
import { useState } from "react";

import "./Register.css";

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setError("");
        setSuccess("");
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (
            !formData.name ||
            !formData.username ||
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword
        ) {
            setError("Please fill in all fields.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setSuccess(
            "Registration form submitted successfully."
        );
    }

    return (
        <main className="register-page">

            <div className="register-container">

                <div className="register-content">

                    <span className="register-label">
                        JOIN MUNCHLY
                    </span>

                    <h1>
                        Create your
                        <strong> account.</strong>
                    </h1>

                    <p>
                        Create an account and make your
                        recipe discovery experience personal.
                    </p>

                    <form
                        className="register-form"
                        onSubmit={handleSubmit}
                    >

                        <div className="register-field">
                            <label htmlFor="name">
                                Full Name
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="register-field">
                            <label htmlFor="username">
                                Username
                            </label>

                            <input
                                id="username"
                                name="username"
                                type="text"
                                placeholder="Choose a username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="register-field">
                            <label htmlFor="email">
                                Email
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="register-field">
                            <label htmlFor="password">
                                Password
                            </label>

                            <div className="password-input-wrapper">
                                <input
                                    id="password"
                                    name="password"
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Create a password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />

                                <button
                                    type="button"
                                    className="password-toggle"
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
                                    {showPassword ? "◉" : "◌"}
                                </button>
                            </div>
                        </div>

                        <div className="register-field">
                            <label htmlFor="confirmPassword">
                                Confirm Password
                            </label>

                            <div className="password-input-wrapper">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Confirm your password"
                                    value={
                                        formData.confirmPassword
                                    }
                                    onChange={handleChange}
                                />

                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            (prev) => !prev
                                        )
                                    }
                                    aria-label={
                                        showConfirmPassword
                                            ? "Hide password"
                                            : "Show password"
                                    }
                                >
                                    {showConfirmPassword
                                        ? "◉"
                                        : "◌"}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <p className="register-error">
                                {error}
                            </p>
                        )}

                        {success && (
                            <p className="register-success">
                                {success}
                            </p>
                        )}

                        <button
                            type="submit"
                            className="register-button"
                        >
                            Create Account
                        </button>

                    </form>

                    <div className="register-login">
                        <span>
                            Already registered?
                        </span>

                        <Link href="/login">
                            Login
                        </Link>
                    </div>

                </div>

            </div>

        </main>
    );
}