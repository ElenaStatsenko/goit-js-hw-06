

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const  button = document.querySelector('.change-color');
const span = document.querySelector('.color');
button.addEventListener('click', () => {
  let hexcolor = [getRandomHexColor()];
  document.body.style.backgroundColor = hexcolor;
  span.textContent = hexcolor ;
})

