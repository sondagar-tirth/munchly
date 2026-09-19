import {
    getCategories,
    getPopularMeals,
    getRandomMeal,
} from "@/lib/api/meals";

import FeaturedRecipe from "@/components/featured-recipe/FeaturedRecipe";
import Hero from "@/components/hero/Hero";
import CategorySection from "@/components/category-section/CategorySection";
import MunchlyPicks from "@/components/munchly-picks/MunchlyPicks";
import RandomRecipe from "@/components/random-recipe/RandomRecipe";

export default async function Home() {
    const [
        featuredData,
        surpriseData,
        categoryData,
        popularMeals,
    ] = await Promise.all([
        getRandomMeal(),
        getRandomMeal(),
        getCategories(),
        getPopularMeals(),
    ]);

    const featuredMeal =
        featuredData.meals?.[0];

    const surpriseMeal =
        surpriseData.meals?.[0];

    const categories =
        categoryData.categories || [];

    return (
        <main>
            <Hero />

            <FeaturedRecipe
                meal={featuredMeal}
            />

            <MunchlyPicks
                meals={popularMeals}
            />

            <CategorySection
                categories={categories}
            />

            <RandomRecipe
                meal={surpriseMeal}
            />
        </main>
    );
}