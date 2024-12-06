// Sample Recipe Data (Expanded)
 
    const recipes = [
        { 
            id: 1, 
            title: "Pancakes", 
            category: "breakfast", 
            image: "https://media.istockphoto.com/id/161170090/photo/pancakes-with-berries-and-maple-syrup.jpg?s=612x612&w=0&k=20&c=8EctScsN7q5UmxeXPNBnYN1eFmJmgmp2bE0OIq_czwM=",
            description: "Fluffy and delicious pancakes.", 
            fullRecipe: "1. Mix flour, eggs, milk, and sugar to create a batter. 2. Heat a non-stick pan and pour the batter. 3. Flip when bubbles appear. 4. Serve with syrup or toppings of choice." 
        },
        { 
            id: 2, 
            title: "Caesar Salad", 
            category: "lunch", 
            image:"https://www.onceuponachef.com/images/2020/05/best-grilled-chicken-760x1050.jpg",
            description: "Crisp and fresh Caesar salad.", 
            fullRecipe: "1. Toss lettuce, croutons, and parmesan cheese. 2. Mix olive oil, lemon juice, garlic, and anchovy paste for dressing. 3. Add dressing to the salad and serve." 
        },
        { 
            id: 3, 
            title: "Spaghetti Bolognese", 
            category: "dinner", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7YvSy1QNU8eEeqx9GEk-YEcFGZjtpTYjjA&s",
            description: "Rich and hearty spaghetti bolognese.", 
            fullRecipe: "1. Cook spaghetti until al dente. 2. Sauté onions, garlic, and ground beef in olive oil. 3. Add tomato sauce, herbs, and simmer. 4. Serve sauce over spaghetti." 
        },
        { 
            id: 4, 
            title: "French Toast", 
            category: "breakfast", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV1PeZtvnimA29qNi6r2xsoyJxrpigJpW5DA&s",
            description: "Sweet and satisfying French toast.", 
            fullRecipe: "1. Whisk eggs, milk, sugar, and cinnamon. 2. Dip bread slices into the mixture. 3. Fry in butter until golden brown. 4. Serve with syrup or fruit." 
        },
        { 
            id: 5, 
            title: "Grilled Chicken", 
            category: "dinner", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToMozkkZv6pQonP3nn1BlXT2uLTWJxeshxYA&s",
            description: "Tender and juicy grilled chicken.", 
            fullRecipe: "1. Marinate chicken in olive oil, garlic, lemon juice, and spices. 2. Preheat grill and cook chicken for 6-8 minutes on each side. 3. Rest for 5 minutes before serving." 
        },
        { 
            id: 6, 
            title: "Veggie Sandwich", 
            category: "lunch", 
            image: "https://recipesblob.oetker.in/assets/6e9fb84be553424a9bb7368bbad24a77/1272x764/multigrain-sandwich-with-beetroot-avocado-and-greens.webp",
            description: "Fresh and tasty veggie sandwich.", 
            fullRecipe: "1. Spread hummus or mayo on bread slices. 2. Layer with cucumber, tomato, lettuce, and cheese. 3. Toast if desired and serve immediately." 
        },
        { 
            id: 7, 
            title: "Smoothie Bowl", 
            category: "breakfast", 
            image: "https://images.immediate.co.uk/production/volatile/sites/30/2022/12/Smoothie-bowl-16df176.jpg",
            description: "Healthy and colorful smoothie bowl.", 
            fullRecipe: "1. Blend frozen bananas, berries, and yogurt. 2. Pour into a bowl and top with granola, nuts, and fresh fruit. 3. Enjoy as a refreshing meal or snack." 
        },
        { 
            id: 8, 
            title: "Tomato Soup", 
            category: "lunch", 
            image:"https://www.foodandwine.com/thmb/j1vJdgrMdu64ElBpxMzmvqpyt5U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/creamy-tomato-soup-buttery-croutons-hero-02-49b419d00f854db78838a79c8df9a23f.jpg",
            description: "Warm and comforting tomato soup.", 
            fullRecipe: "1. Sauté onions and garlic in olive oil. 2. Add chopped tomatoes, broth, and basil. 3. Simmer for 20 minutes and blend until smooth. 4. Serve with croutons or bread." 
        },
        { 
            id: 9, 
            title: "Steak and Potatoes", 
            category: "dinner", 
            image: "https://embed.widencdn.net/img/beef/lczqxdqanp/1120x840px/grilled-ribye-steaks-and-potatoes-with-smoky-paprika-rub-square.tif?keep=c&u=7fueml",
            description: "Classic steak with roasted potatoes.", 
            fullRecipe: "1. Season steak with salt and pepper. 2. Sear in a hot skillet for 3-4 minutes per side. 3. Roast potatoes with olive oil and rosemary. 4. Serve together with your choice of sauce." 
        },
        { 
            id: 10, 
            title: "Avocado Toast", 
            category: "breakfast", 
            image: "https://tastefullygrace.com/wp-content/uploads/2022/06/Ultimate-Smoked-Salmon-Avocado-Toast-Recipe-1-scaled.jpg",
            description: "Simple and delicious avocado toast.", 
            fullRecipe: "1. Mash ripe avocados and season with salt and pepper. 2. Spread on toasted bread. 3. Top with red chili flakes, a poached egg, or sliced tomatoes as desired." 
        },
    
       {
        id: 11, 
        title: "Quinoa Salad", 
        category: "lunch", 
        image: "https://www.twopeasandtheirpod.com/wp-content/uploads/2021/06/Greek-Quinoa-Salad4637.jpg", 
        description: "Light and nutritious quinoa salad.", 
        fullRecipe: "1. Cook quinoa and let it cool. 2. Mix with chopped vegetables, olive oil, and lemon juice. 3. Add herbs like parsley and mint for extra flavor." 
    },
    { 
        id: 12, 
        title: "Beef Stroganoff", 
        category: "dinner", 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgmk06zHpL8VftktorKP1gDY5EuTCYKbXwSA&s", 
        description: "Creamy and flavorful beef stroganoff.", 
        fullRecipe: "1. Sauté beef strips, onions, and mushrooms in butter. 2. Add sour cream and beef broth. 3. Simmer and serve over egg noodles or rice." 
    },
    { 
        id: 13, 
        title: "Blueberry Muffins", 
        category: "breakfast", 
        image: "https://www.rainbownourishments.com/wp-content/uploads/2022/03/vegan-blueberry-muffins-1-1.jpg", 
        description: "Sweet and fluffy blueberry muffins.", 
        fullRecipe: "1. Mix flour, sugar, baking powder, and salt. 2. Fold in blueberries. 3. Fill muffin tins and bake at 375°F for 20-25 minutes." 
    },
    { 
        id: 14, 
        title: "Chicken Wrap", 
        category: "lunch", 
        image: "https://galitoschicken.com/blog/wp-content/uploads/sites/9/2023/05/side-view-chicken-roll-grilled-chicken-lettuce-cucumber-tomato-mayo-pita.jpg", 
        description: "Quick and easy chicken wrap.", 
        fullRecipe: "1. Spread mayo or dressing on a tortilla. 2. Add cooked chicken, lettuce, tomato, and cheese. 3. Roll tightly and cut in half to serve." 
    },
    { 
        id: 15, 
        title: "Vegetable Stir-fry", 
        category: "dinner", 
        image: "https://images.themodernproper.com/billowy-turkey/production/posts/VegetableStirFry_10.jpg?w=1200&q=82&auto=format&fit=crop&dm=1703377361&s=dcc5b387ddf86e293603e6c4adeba792", 
        description: "Healthy and colorful stir-fried veggies.", 
        fullRecipe: "1. Heat oil in a wok and stir-fry garlic. 2. Add mixed vegetables and stir for 5-7 minutes. 3. Season with soy sauce and sesame oil before serving." 
    },
    { 
        id: 16, 
        title: "Egg Benedict", 
        category: "breakfast", 
        image: "https://www.thespruceeats.com/thmb/uJNzfBNBhtogWSExugLzjU2LmsI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/EggsBenectictHERO-4a957cd9e4624262b3e9b8f645462f91.jpg", 
        description: "Perfectly poached eggs on toast.", 
        fullRecipe: "1. Toast English muffins and add ham. 2. Top with poached eggs and hollandaise sauce. 3. Serve warm for a classic breakfast." 
    },
    { 
        id: 17, 
        title: "Burrito Bowl", 
        category: "lunch", 
        image: "https://www.simplysissom.com/wp-content/uploads/2019/07/Healthy-Burrito-Bowls-With-Cilantro-Lime-Dressing-FI-1.jpg", 
        description: "Delicious and customizable burrito bowl.", 
        fullRecipe: "1. Layer rice, beans, cooked meat, and veggies in a bowl. 2. Top with salsa, guacamole, and sour cream. 3. Customize with cheese or jalapeños." 
    },
    { 
        id: 18, 
        title: "Lamb Chops", 
        category: "dinner", 
        image: "https://tatyanaseverydayfood.com/wp-content/uploads/2020/06/Garlic-Herb-Grilled-Lamb-Chops-3.jpg", 
        description: "Succulent and flavorful lamb chops.", 
        fullRecipe: "1. Marinate lamb chops with olive oil, garlic, and rosemary. 2. Sear in a hot pan for 3 minutes on each side. 3. Let rest before serving." 
    },
];
function searchRecipes() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => {
        return recipe.title.toLowerCase().includes(searchQuery) || recipe.description.toLowerCase().includes(searchQuery);
    });
    renderRecipesFromSearch(filteredRecipes);
}

// Function to render recipes from search results
function renderRecipesFromSearch(filteredRecipes) {
    const container = document.getElementById('recipes-container');
    container.innerHTML = "";  // Clear existing recipes

    if (filteredRecipes.length === 0) {
        container.innerHTML = "<p>No recipes found.</p>";
    } else {
        filteredRecipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');
            recipeCard.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}">
                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>
                <div class="buttons">
                    <button class="like-button" onclick="likeRecipe(${recipe.id})">
                        <span class="heart">&#10084;</span> ${recipe.likes || 0}
                    </button>
                    <button class="save-button" onclick="saveRecipe(${recipe.id})">Save</button>
                </div>
            `;
            recipeCard.onclick = () => showRecipeModal(recipe);
            container.appendChild(recipeCard);
        });
    }
}


// Render Recipes
function renderRecipes(filteredCategory = "") {
    const container = document.getElementById('recipes-container');
    container.innerHTML = "";  // Clear existing recipes

    const filteredRecipes = filteredCategory 
        ? recipes.filter(recipe => recipe.category === filteredCategory) 
        : recipes;

    filteredRecipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
            <div class="buttons">
                <button class="like-button" onclick="likeRecipe(${recipe.id})">
                    <span class="heart">&#10084;</span> ${recipe.likes}
                </button>
                <button class="save-button" onclick="saveRecipe(${recipe.id})">Save</button>
            </div>
        `;
        recipeCard.onclick = () => showRecipeModal(recipe);
        container.appendChild(recipeCard);
    });
}

// Like Recipe Function
function likeRecipe(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    recipe.likes++;
    renderRecipes(); // Re-render the recipes to show updated like count
}

// Save Recipe Function
function saveRecipe(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    savedRecipes.push(recipe);
    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
    alert(`${recipe.title} has been saved!`);
}

// Filter Recipes by Category
function filterRecipes(category) {
    renderRecipes(category);
}

// Reset Filter
function resetFilter() {
    renderRecipes();
}

// Show Recipe Modal
function showRecipeModal(recipe) {
    document.getElementById('recipe-modal').style.display = "flex";
    document.getElementById('modal-image').src = recipe.image;
    document.getElementById('modal-title').textContent = recipe.title;
    document.getElementById('modal-description').textContent = recipe.description;
    document.getElementById('modal-recipe').textContent = recipe.fullRecipe;
}

// Close Modal
function closeModal() {
    document.getElementById('recipe-modal').style.display = "none";
}

// Initial render of all recipes
renderRecipes();
