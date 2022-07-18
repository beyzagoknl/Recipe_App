export const recipeDetailModal = (
  title,
  category,
  instructions,
  image,
  link
) => {
  const element = document.createElement("div");
  element.innerHTML = String.raw`
      <h2 class = "recipe-title">${title}</h2>
      <p class = "recipe-category">${category}</p>
      <div class = "recipe-instruct">
          <h3>Instructions:</h3>
          <p class= "instructions" >${instructions}</p>
      </div>
      <div class = "recipe-meal-img">
          <img src = "${image}" alt = "">
      </div>
      <div class = "recipe-link">
          <a href = "${link}" target = "_blank">Watch</a>
      </div>
  `;
  return element;
};
