export const recipes = [
    {
      category: "Italian",
      category_image: "https://img.freepik.com/free-vector/italian-food-illustration_1284-5135.jpg?semt=ais_hybrid",
      recipes: [
        {
          id: 1,
          author: "John Doe",
          author_image: "https://img.freepik.com/free-photo/chef-kitchen_23-2148006182.jpg?ga=GA1.1.2135004450.1734787845&semt=ais_hybrid",
          publiched: "2021-09-01",
          prep_time: "15 min",
          cook_time: "20 min",
          type: "chicken",
          title: "Classic Spaghetti Carbonara",
          description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
          ingredients: [
            "400g spaghetti",
            "150g pancetta",
            "2 large eggs", 
            "100g grated Parmesan cheese",
            "Salt and black pepper to taste",
            "2 cloves garlic (optional)"
          ],
          instructions: [
            "Cook the spaghetti in a large pot of boiling salted water until al dente.",
            "While the pasta cooks, heat a pan over medium heat and cook the pancetta until crispy.",
            "In a bowl, whisk together the eggs and Parmesan cheese.",
            "Drain the pasta, reserving a cup of the cooking water.",
            "Quickly toss the hot pasta with the pancetta, then remove the pan from heat.",
            "Pour the egg and cheese mixture over the pasta, tossing quickly to create a creamy sauce.",
            "Add reserved pasta water if needed to loosen the sauce.",
            "Season with black pepper and serve immediately."
          ],
          nutrition: {
            calories: 450,
            protein: "22g",
            Carbohydrates: "50g",
            carbs: "60g",
            Cholesterol: "50mg",
            fat: "15g"
          },
          images: [
            "https://img.freepik.com/free-photo/spaghetti-carbonara_74190-4785.jpg?semt=ais_hybrid",
            "https://img.freepik.com/free-photo/pork-fork-ham-tasty-parmesan_1203-6385.jpg?semt=ais_hybrid"
          ]
        },
        {
          id: 2,
          author: "Maria Romano",
          author_image: "https://img.freepik.com/free-photo/female-chef-uniform-standing-kitchen_23-2148006183.jpg?semt=ais_hybrid",
          publiched: "2021-09-15",
          prep_time: "30 min",
          cook_time: "12 min",
          type: "vegetarian",
          title: "Margherita Pizza",
          description: "A simple yet delicious classic Italian pizza with fresh tomatoes, mozzarella, and basil.",
          ingredients: [
            "500g pizza dough",
            "300g fresh mozzarella",
            "3 large tomatoes, sliced",
            "Fresh basil leaves",
            "2 tbsp olive oil",
            "Salt to taste"
          ],
          instructions: [
            "Preheat oven to 250°C (480°F).",
            "Roll out the pizza dough on a floured surface.",
            "Arrange tomato slices and mozzarella over the dough.",
            "Bake for 10-12 minutes until the crust is golden and cheese is bubbly.",
            "Garnish with fresh basil and drizzle with olive oil before serving."
          ],
          nutrition: {
            calories: 650,
            protein: "30g",
            Carbohydrates: "80g",
            carbs: "80g",
            Cholesterol: "45mg",
            fat: "25g"
          },
          images: [
            "https://img.freepik.com/free-photo/side-view-closed-pizza-with-checkered-rag-round-board_176474-3046.jpg?semt=ais_hybrid",
            "https://img.freepik.com/free-photo/delicious-pizza-with-fresh-cheese_23-2150096957.jpg?semt=ais_hybrid"
          ]
        },
        {
          id: 3,
          author: "Marco Rossi",
          author_image: "https://img.freepik.com/free-photo/young-chef-uniform-standing-kitchen_23-2148006184.jpg?semt=ais_hybrid",
          publiched: "2021-10-01",
          prep_time: "45 min",
          cook_time: "40 min",
          type: "meat",
          title: "Lasagna",
          description: "Layers of pasta, cheese, and rich meat sauce baked to perfection.",
          ingredients: [
            "12 lasagna noodles",
            "500g ground beef",
            "2 cups ricotta cheese",
            "2 cups shredded mozzarella cheese",
            "1 cup grated Parmesan cheese",
            "1 jar marinara sauce",
            "1 onion, diced",
            "2 cloves garlic, minced",
            "2 eggs",
            "Salt and pepper to taste"
          ],
          instructions: [
            "Preheat the oven to 180°C (350°F).",
            "Cook lasagna noodles according to package instructions.",
            "In a pan, sauté onions and garlic, then add ground beef and cook until browned.",
            "Add marinara sauce to the beef mixture and simmer for 10 minutes.",
            "In a separate bowl, mix ricotta cheese, eggs, and Parmesan cheese.",
            "In a baking dish, layer lasagna noodles, meat sauce, and ricotta mixture. Repeat until all ingredients are used.",
            "Top with mozzarella cheese and bake for 30-40 minutes until bubbly."
          ],
          nutrition: {
            calories: 700,
            protein: "35g",
            Carbohydrates: "65g",
            carbs: "65g",
            Cholesterol: "80mg",
            fat: "35g"
          },
          images: [
            "https://img.freepik.com/free-photo/classic-lasagna-with-bolognese-sauce_2829-11253.jpg?semt=ais_hybrid",
            "https://img.freepik.com/free-photo/fresh-homemade-lasagna-leafs-plate-generative-ai_188544-8132.jpg?semt=ais_hybrid"
          ]
        },
        {
          id: 4,
          author: "Sofia Bianchi",
          author_image: "https://img.freepik.com/free-photo/female-chef-uniform-cooking-kitchen_23-2148006185.jpg?semt=ais_hybrid",
          publiched: "2021-10-15",
          prep_time: "10 min",
          cook_time: "15 min",
          type: "vegetarian",
          title: "Fettuccine Alfredo",
          description: "A creamy pasta dish with fettuccine noodles and a rich Alfredo sauce.",
          ingredients: [
            "400g fettuccine",
            "1 cup heavy cream",
            "100g butter",
            "1 cup grated Parmesan cheese",
            "2 cloves garlic, minced",
            "Salt and pepper to taste"
          ],
          instructions: [
            "Cook the fettuccine in boiling salted water until al dente.",
            "In a pan, melt butter and sauté garlic until fragrant.",
            "Add the heavy cream to the pan and bring to a simmer.",
            "Stir in Parmesan cheese and season with salt and pepper.",
            "Toss the pasta with the sauce and serve immediately."
          ],
          nutrition: {
            calories: 750,
            protein: "18g",
            Carbohydrates: "75g",
            carbs: "75g",
            Cholesterol: "95mg",
            fat: "45g"
          },
          images: [
            "https://img.freepik.com/free-photo/front-view-pasta-cooked-along-with-green-leafs-inside-white-plate-grey-surface_140725-14462.jpg?semt=ais_hybrid",
            "https://img.freepik.com/premium-photo/udon-noodles-with-shrimps_72772-18703.jpg?semt=ais_hybrid"
          ]
        }
      ]
    },
    {
      category: "Mexican",
      category_image: "https://img.freepik.com/free-vector/mexican-food-illustration_1284-5136.jpg?semt=ais_hybrid",
      recipes: [
        {
          id: 5,
          author: "Carlos Rodriguez",
          author_image: "https://img.freepik.com/free-photo/male-chef-uniform-cooking-kitchen_23-2148006186.jpg?semt=ais_hybrid",
          publiched: "2021-11-01",
          prep_time: "20 min",
          cook_time: "15 min",
          type: "meat",
          title: "Tacos",
          description: "Soft or crunchy tortillas filled with seasoned meat and toppings.",
          ingredients: [
            "12 taco shells",
            "500g ground beef",
            "1 onion, diced",
            "1 packet taco seasoning",
            "Lettuce, shredded",
            "Tomatoes, diced",
            "Cheese, shredded",
            "Sour cream"
          ],
          instructions: [
            "Brown the ground beef with diced onions in a skillet.",
            "Add taco seasoning and a bit of water, and simmer for 5 minutes.",
            "Fill taco shells with beef mixture and top with lettuce, tomatoes, cheese, and sour cream."
          ],
          nutrition: {
            calories: 300,
            protein: "20g",
            Carbohydrates: "25g",
            carbs: "25g",
            Cholesterol: "45mg",
            fat: "15g"
          },
          images: [
            "https://img.freepik.com/free-photo/mexican-tacos-with-meat-vegetables-red-onion_2829-8233.jpg?semt=ais_hybrid",
            "https://img.freepik.com/free-photo/mexican-tacos-with-meat-beans-salsa_2829-20108.jpg?semt=ais_hybrid"
          ]
        },
        {
          id: 6,
          author: "Ana Martinez",
          author_image: "https://img.freepik.com/free-photo/female-chef-uniform-cooking-restaurant-kitchen_23-2148006187.jpg?semt=ais_hybrid",
          publiched: "2021-11-15",
          prep_time: "15 min",
          cook_time: "5 min",
          type: "vegetarian",
          title: "Guacamole",
          description: "A creamy dip made with mashed avocados, lime, and seasonings.",
          ingredients: [
            "3 ripe avocados",
            "1 lime, juiced",
            "1/2 onion, finely chopped",
            "1 tomato, diced",
            "Salt and pepper to taste"
          ],
          instructions: [
            "Mash the avocados in a bowl.",
            "Add lime juice, onion, tomato, and season with salt and pepper.",
            "Mix well and serve with chips or as a topping for tacos."
          ],
          nutrition: {
            calories: 150,
            protein: "2g",
            Carbohydrates: "10g",
            carbs: "10g",
            Cholesterol: "0mg",
            fat: "12g"
          },
          images: [
            "https://img.freepik.com/free-photo/fresh-homemade-hot-guacamole-sauce-with-nachos-top-view_114579-7080.jpg?semt=ais_hybrid",
            "https://img.freepik.com/free-photo/fresh-homemade-hot-guacamole-sauce-with-ingredients-top-view_114579-7076.jpg?semt=ais_hybrid"
          ]
        },
        {
          id: 7,
          author: "Miguel Hernandez",
          author_image: "https://img.freepik.com/free-photo/male-chef-uniform-standing-restaurant-kitchen_23-2148006188.jpg?semt=ais_hybrid",
          publiched: "2021-12-01",
          prep_time: "25 min",
          cook_time: "20 min",
          type: "chicken",
          title: "Enchiladas",
          description: "Corn tortillas filled with chicken, cheese, and enchilada sauce, then baked.",
          ingredients: [
            "8 corn tortillas",
            "500g cooked chicken, shredded",
            "1 can enchilada sauce",
            "2 cups shredded cheese",
            "1 onion, diced"
          ],
          instructions: [
            "Preheat the oven to 180°C (350°F).",
            "Fill tortillas with shredded chicken and cheese, then roll them up.",
            "Place the enchiladas in a baking dish, pour enchilada sauce over the top, and sprinkle with cheese.",
            "Bake for 20 minutes until bubbly."
          ],
          nutrition: {
            calories: 350,
            protein: "25g",
            Carbohydrates: "40g",
            carbs: "40g",
            Cholesterol: "55mg",
            fat: "15g"
          },
          images: [
            "https://img.freepik.com/free-photo/spring-roll_1203-8397.jpg?semt=ais_hybrid",
            "https://img.freepik.com/free-photo/doner-wrapped-lavash-with-grilled-tomato_140725-3593.jpg?semt=ais_hybrid"
          ]
        },
        {
          id: 8,
          author: "Isabella Lopez",
          author_image: "https://img.freepik.com/free-photo/female-pastry-chef-uniform-working-bakery_23-2148006189.jpg?semt=ais_hybrid",
          publiched: "2021-12-15",
          prep_time: "30 min",
          cook_time: "15 min",
          type: "dessert",
          title: "Churros",
          description: "Fried dough sticks coated in cinnamon sugar, often served with chocolate sauce.",
          ingredients: [
            "1 cup water",
            "1/2 cup butter",
            "1 cup all-purpose flour",
            "2 eggs",
            "1/4 tsp salt",
            "1/2 cup sugar",
            "1 tsp cinnamon"
          ],
          instructions: [
            "In a saucepan, heat water and butter until melted.",
            "Stir in flour, salt, and cook until the dough forms.",
            "Remove from heat and mix in eggs.",
            "Heat oil in a frying pan, then pipe the dough into long strips.",
            "Fry until golden and coat with cinnamon sugar."
          ],
          nutrition: {
            calories: 250,
            protein: "4g",
            Carbohydrates: "30g",
            carbs: "30g",
            Cholesterol: "62mg",
            fat: "12g"
          },
          images: [
            "https://img.freepik.com/free-photo/hand-holding-churros-glass-chocolate_23-2148379648.jpg?semt=ais_hybrid",
            "https://img.freepik.com/free-photo/hand-holding-spoon-with-chocolate-churros_23-2148379652.jpg?semt=ais_hybrid"
          ]
        },
    ]
  },
  {
    category: "Chinese",
    category_image: "https://img.freepik.com/free-photo/still-life-white-tuna-recipe_52683-153803.jpg?semt=ais_hybrid",
    recipes: [
      {
        id: 9,
        author: "Wei Chen",
        author_image: "https://img.freepik.com/free-photo/asian-chef-uniform-cooking-restaurant-kitchen_23-2148006190.jpg?semt=ais_hybrid",
        publiched: "2022-01-01",
        prep_time: "20 min",
        cook_time: "15 min",
        type: "chicken",
        title: "Kung Pao Chicken",
        description: "A spicy stir-fry with chicken, peanuts, and vegetables in a flavorful sauce.",
        ingredients: [
          "500g chicken breast, diced",
          "1 bell pepper, sliced",
          "1 onion, sliced",
          "1/2 cup roasted peanuts",
          "2 tbsp soy sauce",
          "1 tbsp rice vinegar",
          "1 tbsp chili paste",
          "1 tsp sugar"
        ],
        instructions: [
          "In a pan, cook chicken until browned.",
          "Add vegetables and stir-fry until tender.",
          "Mix soy sauce, rice vinegar, chili paste, and sugar to create the sauce.",
          "Add the peanuts and sauce to the pan, stir to coat, and serve."
        ],
        nutrition: {
          calories: 350,
          protein: "30g",
          Carbohydrates: "25g",
          carbs: "25g",
          Cholesterol: "65mg",
          fat: "15g"
        },
        images: [
          "https://img.freepik.com/free-photo/stir-fry-chicken-zucchini-sweet-peppers-green-onion_2829-10786.jpg?semt=ais_hybrid",
          "https://img.freepik.com/free-photo/homemade-kung-pao-chicken-with-peppers-vegetables-chinese-food-stir-fry_2829-7179.jpg?semt=ais_hybrid"
        ]
      },
      {
        id: 10,
        author: "Li Zhang",
        author_image: "https://img.freepik.com/free-photo/asian-chef-uniform-standing-restaurant-kitchen_23-2148006191.jpg?semt=ais_hybrid",
        publiched: "2022-01-15",
        prep_time: "25 min",
        cook_time: "20 min",
        type: "pork",
        title: "Sweet and Sour Pork",
        description: "Tender pork in a tangy sweet and sour sauce with vegetables.",
        ingredients: [
          "500g pork tenderloin, cubed",
          "1/2 cup pineapple chunks",
          "1 bell pepper, sliced",
          "2 tbsp vinegar",
          "2 tbsp soy sauce",
          "3 tbsp sugar",
          "1 tbsp ketchup"
        ],
        instructions: [
          "Cook the pork until browned.",
          "In a separate pan, mix vinegar, soy sauce, sugar, and ketchup to create the sauce.",
          "Add vegetables and pineapple, and cook until tender.",
          "Combine everything in a pan, toss to coat, and serve."
        ],
        nutrition: {
          calories: 400,
          protein: "25g",
          Carbohydrates: "45g",
          carbs: "45g",
          Cholesterol: "70mg",
          fat: "15g"
        },
        images: [
          "https://img.freepik.com/free-photo/sweet-pork-white-plate-with-chopped-scallions-chili-lime-cucumber-tomato-garlic_1150-25942.jpg?semt=ais_hybrid",
          "https://img.freepik.com/free-photo/stir-fried-mixed-vegetables-containing-green-peas-carrots-mushrooms-corn-broccoli-pork_1150-27013.jpg?semt=ais_hybrid"
        ]
      },
      {
        id: 11,
        author: "Ming Liu",
        author_image: "https://img.freepik.com/free-photo/asian-chef-uniform-cooking-kitchen_23-2148006192.jpg?semt=ais_hybrid",
        publiched: "2022-02-01",
        prep_time: "10 min",
        cook_time: "15 min",
        type: "vegetarian",
        title: "Fried Rice",
        description: "A quick stir-fry with rice, vegetables, and choice of protein.",
        ingredients: [
          "2 cups cooked rice",
          "1 egg",
          "1/2 cup peas and carrots",
          "2 tbsp soy sauce",
          "2 tbsp sesame oil",
          "Green onions for garnish"
        ],
        instructions: [
          "Heat sesame oil in a pan, scramble the egg, then set aside.",
          "Add the rice, peas, and carrots to the pan and stir-fry for a few minutes.",
          "Mix in soy sauce and egg, then garnish with green onions."
        ],
        nutrition: {
          calories: 300,
          protein: "8g",
          Carbohydrates: "45g",
          carbs: "45g",
          Cholesterol: "55mg",
          fat: "10g"
        },
        images: [
          "https://img.freepik.com/free-photo/side-close-up-view-cabbage-with-carrots-carrots-cabbage-plate-fork_140725-71335.jpg?semt=ais_hybrid",
          "https://img.freepik.com/free-photo/side-close-up-view-cabbage-plate-cabbage-cutting-board_140725-72363.jpg?semt=ais_hybrid"
        ]
      },
      {
        id: 12,
        author: "Hui Wang",
        author_image: "https://img.freepik.com/free-photo/asian-chef-uniform-working-restaurant-kitchen_23-2148006193.jpg?semt=ais_hybrid",
        publiched: "2022-02-15",
        prep_time: "40 min",
        cook_time: "10 min",
        type: "pork",
        title: "Dim Sum",
        description: "Assorted bite-sized dumplings and rolls served with dipping sauce.",
        ingredients: [
          "200g ground pork",
          "50g shrimp, minced",
          "2 tbsp soy sauce",
          "1 tsp ginger, minced",
          "Dumpling wrappers"
        ],
        instructions: [
          "Mix pork, shrimp, soy sauce, and ginger to create the filling.",
          "Place a spoonful of filling in each dumpling wrapper and seal.",
          "Steam the dumplings for 10 minutes and serve with dipping sauce."
        ],
        nutrition: {
          calories: 250,
          protein: "20g",
          Carbohydrates: "30g",
          carbs: "30g",
          Cholesterol: "45mg",
          fat: "10g"
        },
        images: [
          "https://img.freepik.com/free-photo/delicious-asian-dim-sum-plate_23-2148249233.jpg?semt=ais_hybrid",
          "https://img.freepik.com/free-photo/top-view-dumplings-wooden-board_23-2148249232.jpg?semt=ais_hybrid"
        ]
      }
    ]
  }
]