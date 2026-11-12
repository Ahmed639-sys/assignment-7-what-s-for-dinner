/* ==========================================================
   app.js  —  app logic
   Order: Config → State → Logic → Templates → Events → Init
   (the recipes live in data.js)
   ========================================================== */


/* ---------- 1) Config ---------- */

const LONG_RECIPE_MINUTES = 45;

const TABS = [
  { id: "ingredients", label: "Ingredients", icon: "fa-list-check" },
  { id: "instructions", label: "Instructions", icon: "fa-book-open" },
  { id: "nutrition", label: "Nutrition", icon: "fa-chart-pie" },
  { id: "tips", label: "Chef's Tips", icon: "fa-lightbulb" },
];

const NUTRITION_FIELDS = [
  { key: "calories", label: "Calories", unit: " kcal", icon: "fa-fire", color: "c-orange" },
  { key: "protein", label: "Protein", unit: "g", icon: "fa-dumbbell", color: "c-blue" },
  { key: "carbs", label: "Carbohydrates", unit: "g", icon: "fa-wheat-awn", color: "c-yellow" },
  { key: "fat", label: "Fat", unit: "g", icon: "fa-droplet", color: "c-red" },
  { key: "fiber", label: "Fiber", unit: "g", icon: "fa-seedling", color: "c-green" },
  { key: "sodium", label: "Sodium", unit: "mg", icon: "fa-cube", color: "c-pink" },
];


/* ---------- 2) State & DOM ---------- */

const state = {
  currentIndex: -1,
  activeTab: "ingredients",
  saved: new Set(JSON.parse(localStorage.getItem("savedMeals") || "[]")),
};

const cardEl = document.getElementById("card");
const headerBookmarkEl = document.getElementById("headerBookmark");
const toastEl = document.getElementById("toast");


/* ---------- 3) Logic ---------- */

// Random meal, never the same one twice in a row.
function getRandomMeal() {
  let index;
  do {
    index = Math.floor(Math.random() * meals.length);
  } while (index === state.currentIndex && meals.length > 1);

  state.currentIndex = index;
  return meals[index];
}

function getCurrentMeal() {
  return meals[state.currentIndex];
}

function isLongRecipe(meal) {
  return meal.prepTime + meal.cookTime > LONG_RECIPE_MINUTES;
}

function isSaved(meal) {
  return state.saved.has(meal.title);
}

function toggleSaved(meal) {
  if (isSaved(meal)) {
    state.saved.delete(meal.title);
    showToast("Removed from saved");
  } else {
    state.saved.add(meal.title);
    showToast("Saved!");
  }
  localStorage.setItem("savedMeals", JSON.stringify([...state.saved]));
}

function shareMeal(meal) {
  const text = `${meal.title} - ${meal.description}`;

  if (navigator.share) {
    navigator.share({ title: meal.title, text });
  } else {
    navigator.clipboard.writeText(text);
    showToast("Copied to clipboard");
  }
}

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  setTimeout(() => toastEl.classList.remove("show"), 1500);
}


/* ---------- 4) Templates (small functions, each builds one piece) ---------- */

function renderHero(meal) {
  return `
    <div class="hero">
      <img src="${meal.image}" alt="${meal.title}">
      <div class="rating">
        <i class="fa-solid fa-star"></i>
        <b>${meal.rating}</b>
        <span>(${meal.reviews} reviews)</span>
      </div>
      <div class="stats">
        <div><i class="fa-solid fa-clock t-prep"></i>Prep Time<b>${meal.prepTime} min</b></div>
        <div><i class="fa-solid fa-fire-burner t-cook"></i>Cook Time<b>${meal.cookTime} min</b></div>
        <div><i class="fa-solid fa-users t-serv"></i>Servings<b>${meal.servings} people</b></div>
      </div>
    </div>`;
}

function renderTags(meal) {
  return `
    <div class="tags">
      <span class="tag ${meal.difficulty.toLowerCase()}">${meal.difficulty}</span>
      <span class="tag cat">${meal.category}</span>
    </div>`;
}

function renderTitleRow(meal) {
  const savedClass = isSaved(meal) ? "on" : "";

  return `
    <div class="title-row">
      <h2>${meal.title}</h2>
      <div class="actions">
        <button class="action-btn ${savedClass}" data-action="save"><i class="fa-solid fa-bookmark"></i></button>
        <button class="action-btn" data-action="share"><i class="fa-solid fa-share-nodes"></i></button>
      </div>
    </div>
    <p class="desc">${meal.description}</p>`;
}

function renderWarning(meal) {
  if (!isLongRecipe(meal)) return "";

  return `
    <div class="warn">
      <i class="fa-solid fa-triangle-exclamation"></i>
      <div>
        <b>Extended Preparation Time</b>
        <span>This recipe requires more than ${LONG_RECIPE_MINUTES} minutes to prepare. Plan accordingly!</span>
      </div>
    </div>`;
}

function renderTabs() {
  const buttons = TABS.map(({ id, label, icon }) => {
    const activeClass = id === state.activeTab ? "on" : "";
    return `
      <button class="tab ${activeClass}" data-tab="${id}">
        <i class="fa-solid ${icon}"></i>${label}
      </button>`;
  });

  return `<div class="tabs">${buttons.join("")}</div>`;
}

// --- one function per tab panel ---

function renderIngredients(meal) {
  const items = meal.ingredients.map(
    (item, i) => `<li><span class="num">${i + 1}</span>${item}</li>`
  );
  return `<ul class="list">${items.join("")}</ul>`;
}

function renderInstructions(meal) {
  const steps = meal.instructions.map(
    (step, i) => `<li><span class="num">${i + 1}</span><span>${step}</span></li>`
  );
  return `<ol class="steps">${steps.join("")}</ol>`;
}

function renderNutrition(meal) {
  const tiles = NUTRITION_FIELDS.map(
    ({ key, label, unit, icon, color }) => `
      <div class="tile">
        <div class="left">
          <span class="ico ${color}"><i class="fa-solid ${icon}"></i></span>${label}
        </div>
        <b>${meal.nutrition[key]}${unit}</b>
      </div>`
  );
  return `<div class="grid">${tiles.join("")}</div>`;
}

function renderTips(meal) {
  return meal.tips
    .map((tip) => `<div class="tip"><i class="fa-solid fa-circle-check"></i>${tip}</div>`)
    .join("");
}

const PANEL_RENDERERS = {
  ingredients: renderIngredients,
  instructions: renderInstructions,
  nutrition: renderNutrition,
  tips: renderTips,
};

function renderPanel(meal) {
  return `<div class="panel">${PANEL_RENDERERS[state.activeTab](meal)}</div>`;
}

// --- put everything together ---

function renderMeal(meal) {
  cardEl.innerHTML = `
    ${renderHero(meal)}
    <div class="body">
      ${renderTags(meal)}
      ${renderTitleRow(meal)}
      ${renderWarning(meal)}
      ${renderTabs()}
      ${renderPanel(meal)}
      <div class="footer">
        <button class="btn" data-action="another">
          <i class="fa-solid fa-arrows-rotate"></i>Try Another Recipe
        </button>
      </div>
    </div>`;

  headerBookmarkEl.classList.toggle("on", isSaved(meal));
}


/* ---------- 5) Events ---------- */

function showRandomMeal() {
  state.activeTab = "ingredients";
  renderMeal(getRandomMeal());
}

function showTab(tabId) {
  state.activeTab = tabId;
  renderMeal(getCurrentMeal());
}

function handleSave() {
  toggleSaved(getCurrentMeal());
  renderMeal(getCurrentMeal());
}

const ACTIONS = {
  another: showRandomMeal,
  save: handleSave,
  share: () => shareMeal(getCurrentMeal()),
};

// One listener for the whole card (works even after re-rendering).
cardEl.addEventListener("click", (event) => {
  const tabButton = event.target.closest("[data-tab]");
  if (tabButton) return showTab(tabButton.dataset.tab);

  const actionButton = event.target.closest("[data-action]");
  if (actionButton) ACTIONS[actionButton.dataset.action]();
});

headerBookmarkEl.addEventListener("click", handleSave);


/* ---------- 6) Init ---------- */

showRandomMeal();