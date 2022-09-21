import { recipeDetailModal } from "../views/recipeView.js";
import { fetchData } from "../fetchData.js";

const mealList = document.getElementById("meal");
const mealDetailsContent = document.getElementById("meal-details-content");
const recipeCloseBtn = document.getElementById("recipe-close-btn");

const getMealRecipe = async (e) => {
  e.preventDefault();
  if (e.target.classList.contains("recipe-btn")) {
    let mealItem = e.target.parentElement.parentElement;
    let URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`;
    try {
      const data = await fetchData(URL);
      const result = data.meals;
      showRecipe(result);
    } catch (error) {
      console.log(error);
    }
  }
};
mealList.addEventListener("click", getMealRecipe);

const showRecipe = (meal) => {
  meal = meal[0];
  let html = recipeDetailModal(
    meal.strMeal,
    meal.strCategory,
    meal.strInstructions,
    meal.strMealThumb,
    meal.strYoutube
  );
  mealDetailsContent.innerHTML = "";
  mealDetailsContent.appendChild(html);
  mealDetailsContent.parentElement.classList.remove("hidden");
  mealDetailsContent.parentElement.classList.add("showRecipe");
};

recipeCloseBtn.addEventListener("click", () => {
  mealDetailsContent.parentElement.classList.add("hidden");
});
