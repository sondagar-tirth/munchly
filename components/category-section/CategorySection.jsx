import Link from "next/link";
import "./CategorySection.css";

export default function CategorySection({ categories }) {
    return (
        <section className="category-section">

            <div className="category-header">

                <div>
                    <span className="wow animate__animated animate__fadeInUp">
                        EXPLORE FLAVOURS
                    </span>

                    <h2
                        className="wow animate__animated animate__fadeInUp"
                        data-wow-delay="0.15s"
                    >
                        Browse by <strong>category</strong>
                    </h2>
                </div>

                <Link
                    href="/categories"
                    className="wow animate__animated animate__fadeInRight"
                    data-wow-delay="0.25s"
                >
                    View all
                </Link>

            </div>

            <div className="category-grid">

                {categories.slice(0, 8).map((category, index) => (
                    <Link
                        href={`/categories?category=${encodeURIComponent(
                            category.strCategory
                        )}`}
                        className="category-card wow animate__animated animate__fadeInUp"
                        data-wow-delay={`${0.1 + index * 0.08}s`}
                        key={category.idCategory}
                    >
                        <img
                            src={category.strCategoryThumb}
                            alt={category.strCategory}
                        />

                        <div className="category-overlay">
                            <h3>{category.strCategory}</h3>
                            <span>Explore recipes →</span>
                        </div>
                    </Link>
                ))}

            </div>

        </section>
    );
}