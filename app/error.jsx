"use client";

import "./error.css";

export default function Error({ reset }) {
    return (
        <main className="munchly-error">
            <div className="error-content">

                <span className="error-label">
                    SOMETHING WENT WRONG
                </span>

                <h1>
                    Looks like the
                    <span> kitchen paused.</span>
                </h1>

                <p>
                    We couldn&apos;t prepare this page right now.
                    Give it another try and let&apos;s get cooking.
                </p>

                <button onClick={() => reset()}>
                    Try Again
                </button>

            </div>
        </main>
    );
}