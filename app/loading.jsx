"use client";

import { useEffect, useState } from "react";
import "./loading.css";

export default function Loading() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }

                return prev + 2;
            });
        }, 45);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="munchly-loader">

            <div className="loader-glow"></div>

            <div className="food-loader">

                {/* Floating ingredients */}

                <div className="ingredient tomato tomato-one"></div>
                <div className="ingredient tomato tomato-two"></div>

                <div className="ingredient leaf leaf-one"></div>
                <div className="ingredient leaf leaf-two"></div>
                <div className="ingredient leaf leaf-three"></div>

                <div className="ingredient dot dot-one"></div>
                <div className="ingredient dot dot-two"></div>
                <div className="ingredient dot dot-three"></div>

                {/* Food */}

                <div className="food-area">

                    <div className="steam steam-one"></div>
                    <div className="steam steam-two"></div>
                    <div className="steam steam-three"></div>

                    <div className="food">
                        <span className="food-piece piece-one"></span>
                        <span className="food-piece piece-two"></span>
                        <span className="food-piece piece-three"></span>
                        <span className="food-piece piece-four"></span>
                        <span className="food-piece piece-five"></span>
                    </div>

                    <div className="plate">
                        <div className="plate-inner"></div>
                    </div>

                </div>

                {/* Loading */}

                <div className="loader-progress">

                    <div className="progress-number">
                        {progress}%
                    </div>

                    <div className="progress-track">
                        <div
                            className="progress-fill"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>

                    <div className="progress-text">
                        Preparing something delicious
                    </div>

                </div>

            </div>

        </main>
    );
}