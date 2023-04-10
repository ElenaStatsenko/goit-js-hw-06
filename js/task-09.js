const button = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
<<<<<<< HEAD




const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
=======
const  button = document.querySelector('.change-color');
const span = document.querySelector('.color');
button.addEventListener('click', () => {
  let hexcolor = [getRandomHexColor()];
  document.body.style.backgroundColor = hexcolor;
  span.textContent = hexcolor ;
})
>>>>>>> 78ff05b9c7bdea13feb73e7c06a03e777fb2e7a6
