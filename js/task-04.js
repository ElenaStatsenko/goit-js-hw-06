<<<<<<< HEAD
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector ('[data-action="increment"]');
const value = document.querySelector('#value');
let  counterValue = 0;
decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
counterValue += 1;
value.textContent = counterValue;
});
=======

const value = document.getElementById('value');
    let counterValue = 0; 
    value.innerHTML = counterValue; 
    const getValue = (key) => {if (key === increment) { counterValue +=1} else { counterValue -=1};}
  
  const incrementButton = document.querySelector('[data-action="increment"]');
  const  decrementButton = document.querySelector('[data-action="decrement"]');
  incrementButton.addEventListener( "click" , getValue('[data-action="increment"]'));
  decrementButton.addEventListener( "click" , getValue('[data-action="decrement"]'));
  
  
>>>>>>> 6064ffa14fd6982350a7a714ac43d3f0a1435f07
