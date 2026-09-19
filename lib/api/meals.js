const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export async function searchMeals(query) {

    const res = await fetch(`${BASE_URL}/search.php?s=${encodeURIComponent(query)}`)

    if (!res.ok) {
        throw new Error("Failed to Search Meal")
    }

    return res.json()

}

export async function getRandomMeal() {
    const response = await fetch(`${BASE_URL}/random.php`);

    if (!response.ok) {
        throw new Error("Failed to fetch random meal");
    }

    return response.json();
}

export async function getCategories() {
    const response = await fetch(
        `${BASE_URL}/categories.php`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch categories");
    }

    return response.json();
}

export async function getMealById(id) {
    const response = await fetch(
        `${BASE_URL}/lookup.php?i=${encodeURIComponent(id)}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch meal details");
    }

    return response.json();
}

export async function getMealsByCategory(category) {
    const response = await fetch(
        `${BASE_URL}/filter.php?c=${encodeURIComponent(category)}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch meals by category");
    }

    return response.json();
}

export async function getDiscoverRecipes() {
    const categories = [
        "Chicken",
        "Beef",
        "Seafood",
        "Vegetarian",
        "Dessert",
    ];

    const results = await Promise.all(
        categories.map(async (category) => {
            const data = await getMealsByCategory(category);

            return (data.meals || []).slice(0, 12).map((meal) => ({
                ...meal,
                strCategory: category,
            }));
        })
    );

    const uniqueMeals = Array.from(
        new Map(
            results
                .flat()
                .map((meal) => [meal.idMeal, meal])
        ).values()
    );

    return uniqueMeals;
}

export function getMealType(meal) {
    const category = meal.strCategory?.toLowerCase() || "";

    const ingredients = Array.from(
        { length: 20 },
        (_, index) =>
            meal[`strIngredient${index + 1}`]
                ?.trim()
                .toLowerCase()
    ).filter(Boolean);

    const nonVegIngredients = [
        "chicken",
        "beef",
        "pork",
        "lamb",
        "mutton",
        "turkey",
        "duck",
        "goat",
        "rabbit",
        "venison",
        "bacon",
        "ham",
        "sausage",
        "salmon",
        "tuna",
        "prawn",
        "shrimp",
        "crab",
        "lobster",
        "anchovy",
        "sardine",
        "mackerel",
        "fish",
        "chicken stock",
        "beef stock",
        "fish stock",
        "meat",
    ];

    const hasNonVegIngredient = ingredients.some(
        (ingredient) =>
            nonVegIngredients.some((item) =>
                ingredient.includes(item)
            )
    );

    if (hasNonVegIngredient) {
        return "non-veg";
    }

    if (category === "vegetarian") {
        return "veg";
    }

    return "veg";
}

export async function getPopularMeals() {
    const categories = [
        "Chicken",
        "Beef",
        "Seafood",
        "Vegetarian",
    ];

    const results = await Promise.all(
        categories.map(async (category) => {
            const data = await getMealsByCategory(category);

            return (data.meals || []).slice(0, 4);
        })
    );

    const uniqueMeals = Array.from(
        new Map(
            results
                .flat()
                .map((meal) => [meal.idMeal, meal])
        ).values()
    );

    return uniqueMeals.slice(0, 12);
}

export async function getCuisineMeals() {
    const areas = [
        "Indian",
        "Italian",
        "Japanese",
        "Mexican",
    ];

    const cuisines = [];

    for (const area of areas) {
        try {
            const data = await getMealsByArea(area);

            const meals = (data.meals || []).slice(0, 4);

            if (meals.length > 0) {
                cuisines.push({
                    area,
                    meals,
                });
            }
        } catch (error) {
            console.error(
                `Failed to fetch ${area} cuisine`,
                error
            );
        }
    }

    return cuisines;
}