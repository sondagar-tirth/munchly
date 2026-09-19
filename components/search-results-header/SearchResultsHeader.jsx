import "./SearchResultsHeader.css";

export default function SearchResultsHeader({ query, count }) {
    return (
        <section className="search-results-header">

            <span className="wow animate__animated animate__fadeInUp">
                SEARCH RESULTS
            </span>

            <h1
                className="wow animate__animated animate__fadeInUp"
                data-wow-delay="0.15s"
            >
                Recipes for{" "}
                <strong>&quot;{query}&quot;</strong>
            </h1>

            <p
                className="wow animate__animated animate__fadeInUp"
                data-wow-delay="0.3s"
            >
                {count} recipes found
            </p>

        </section>
    );
}