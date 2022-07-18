import { recipesModal } from "../views/mealsView.js";
import { fetchData } from "../fetchData.js";

const searchBtn = document.getElementById("search-btn");
const mealList = document.getElementById("meal");

const getMealList = async () => {
  let searchValue = document.getElementById("search-input");
  let searchInputTxt = searchValue.value.trim();
  let URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputTxt}`;
  try {
    const data = await fetchData(URL);
    mealList.classList.remove("centered");
    getFood(data);
  } catch (error) {
    console.log(error);
  } finally {
    searchValue.value = "";
  }
};
searchBtn.addEventListener("click", getMealList);

const surpriseBtn = document.querySelector("#random");
surpriseBtn.addEventListener("click", async () => {
  const url = `https://www.themealdb.com/api/json/v1/1/random.php`;
  try {
    const data = await fetchData(url);

    if (data.meals.length === 1) {
      mealList.classList.remove("meal-list");
      mealList.classList.add("centered");
    }
    getFood(data);
  } catch (error) {
    console.log(error);
  }
});

const getFood = (data) => {
  let html = "";
  if (data.meals) {
    data.meals.forEach((meal) => {
      html += recipesModal(meal.idMeal, meal.strMealThumb, meal.strMeal);
    });
    mealList.classList.remove("notFound");
    mealList.classList.add("meal-list");
  } else {
    html = "Sorry, we didn't find any meal!";
    mealList.classList.add("notFound");
  }
  mealList.innerHTML = html;
};
