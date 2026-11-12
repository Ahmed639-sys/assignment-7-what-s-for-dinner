/* ==========================================================
   data.js  —  the recipes
   ----------------------------------------------------------
   meals     = array of objects (one object per meal)
   Lists     = arrays  (ingredients, instructions, tips)
   nutrition = object inside each meal
   image     : path to the meal photo inside the images/ folder
   ========================================================== */

const meals = [
  {
    title: "Shrimp Scampi",
    description: "Garlicky shrimp in white wine butter sauce",
    image: "images/shrimp-scampi-119-768x1152.jpg",
    difficulty: "Easy",
    category: "Seafood",
    rating: 4.8,
    reviews: 356,
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    ingredients: [
      "400g large shrimp, peeled",
      "300g linguine pasta",
      "6 cloves garlic, minced",
      "1/2 cup white wine",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "Fresh parsley, chopped",
      "Lemon juice and zest",
      "Red pepper flakes"
    ],
    instructions: [
      "Cook linguine according to package directions. Reserve 1 cup pasta water.",
      "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
      "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
      "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
      "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed."
    ],
    nutrition: { calories: 520, protein: 36, carbs: 54, fat: 18, fiber: 3, sodium: 620 },
    tips: [
      "Don't overcook shrimp - they cook very quickly",
      "Use good quality white wine for best flavor",
      "Toss pasta in sauce for maximum flavor absorption",
      "Add extra lemon for bright, fresh taste"
    ]
  },
  {
    title: "Classic Lasagna",
    description: "Layered pasta with meat sauce, béchamel and cheese",
    image: "images/OIP.webp",
    difficulty: "Medium",
    category: "Italian",
    rating: 4.6,
    reviews: 410,
    prepTime: 30,
    cookTime: 90,
    servings: 4,
    ingredients: [
      "12 lasagna sheets",
      "500g ground beef",
      "400g canned tomatoes",
      "1 onion, diced",
      "2 carrots, diced",
      "500ml béchamel sauce",
      "200g mozzarella, grated",
      "100g parmesan cheese",
      "Fresh basil"
    ],
    instructions: [
      "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
      "Cook lasagna sheets according to package directions. Drain and set aside.",
      "Preheat oven to 180°C (350°F).",
      "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
      "Top final layer with béchamel, mozzarella, and parmesan cheese."
    ],
    nutrition: { calories: 680, protein: 42, carbs: 58, fat: 28, fiber: 6, sodium: 920 },
    tips: [
      "Make bolognese sauce a day ahead for better flavor",
      "Don't skip the resting time after baking",
      "Use fresh pasta sheets for best texture",
      "Freeze leftovers in individual portions"
    ]
  },
  {
    title: "Teriyaki Chicken Bowl",
    description: "Sweet and savory chicken over rice with vegetables",
    image: "images/12-Teriyaki-Chicken-Bowl.png",
    difficulty: "Easy",
    category: "Asian",
    rating: 4.7,
    reviews: 367,
    prepTime: 15,
    cookTime: 20,
    servings: 2,
    ingredients: [
      "400g chicken thighs, sliced",
      "1/2 cup teriyaki sauce",
      "2 cups cooked rice",
      "1 broccoli head, florets",
      "1 carrot, julienned",
      "Sesame seeds",
      "Green onions, sliced",
      "1 tablespoon sesame oil"
    ],
    instructions: [
      "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
      "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
      "Meanwhile, steam broccoli and carrots until tender-crisp.",
      "Divide rice between bowls.",
      "Top with teriyaki chicken and steamed vegetables."
    ],
    nutrition: { calories: 540, protein: 42, carbs: 58, fat: 14, fiber: 4, sodium: 1240 },
    tips: [
      "Use chicken thighs for juicier meat",
      "Make homemade teriyaki sauce for better flavor control",
      "Add edamame for extra protein",
      "Meal prep by cooking rice and chicken ahead"
    ]
  },
  {
    title: "Caprese Sandwich",
    description: "Fresh Italian sandwich with mozzarella, tomato, and basil",
    image: "images/OIP.jfif",
    difficulty: "Easy",
    category: "Italian",
    rating: 4.5,
    reviews: 189,
    prepTime: 10,
    cookTime: 5,
    servings: 2,
    ingredients: [
      "1 ciabatta bread",
      "200g fresh mozzarella, sliced",
      "2 large tomatoes, sliced",
      "Fresh basil leaves",
      "3 tablespoons pesto",
      "2 tablespoons balsamic glaze",
      "Olive oil",
      "Salt and pepper"
    ],
    instructions: [
      "Slice ciabatta bread in half horizontally.",
      "Toast bread lightly until just crispy.",
      "Spread pesto on both sides of bread.",
      "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
      "Drizzle with olive oil and balsamic glaze. Season with salt and pepper."
    ],
    nutrition: { calories: 480, protein: 22, carbs: 48, fat: 22, fiber: 3, sodium: 680 },
    tips: [
      "Use ripe, in-season tomatoes for best flavor",
      "Buffalo mozzarella is traditional but harder to slice",
      "Toast bread lightly - not too crispy",
      "Add prosciutto or salami for a heartier sandwich"
    ]
  },
  {
    title: "French Onion Soup",
    description: "Rich beef broth with caramelized onions and melted cheese",
    image: "images/French-Onion-Soup-1120x1400.webp",
    difficulty: "Medium",
    category: "French",
    rating: 4.7,
    reviews: 267,
    prepTime: 15,
    cookTime: 70,
    servings: 4,
    ingredients: [
      "4 large onions, thinly sliced",
      "4 tablespoons butter",
      "1 liter beef broth",
      "1/2 cup white wine",
      "2 bay leaves",
      "Fresh thyme",
      "Baguette slices",
      "200g Gruyère cheese, grated"
    ],
    instructions: [
      "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
      "Add white wine and deglaze the pot, scraping up brown bits.",
      "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
      "Meanwhile, toast baguette slices until golden.",
      "Ladle soup into oven-safe bowls. Top with toasted bread and cheese."
    ],
    nutrition: { calories: 380, protein: 18, carbs: 36, fat: 18, fiber: 4, sodium: 980 },
    tips: [
      "Patience is key - don't rush the onion caramelization",
      "Use good quality beef broth for best flavor",
      "Gruyère can be substituted with Swiss cheese",
      "Watch carefully when broiling to avoid burning"
    ]
  }
];