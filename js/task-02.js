const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientList= document.getElementById('ingredients');
ingredients.map(ingredient => {
  let listItem = document.createElement('li');
  listItem.textContent =`${ingredient}`;
  listItem.classList.add('item');
  ingredientList.insertAdjacentElement("beforeend", listItem);
});
