export const recipesModal = (id, image, title) => {
  let element = "";
  element = String.raw`
    <div class = "meal-item" data-id = "${id}">
    <div class = "meal-img">
    <img src = "${image}" alt = "food">
    </div>
    <div class = "meal-name">
    <h3>${title}</h3>
    <a href = "#" class = "recipe-btn">Get Recipe</a>
    </div>
    </div>
    `;
  return element;
};
