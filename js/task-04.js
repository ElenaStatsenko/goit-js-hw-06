
const value = document.getElementById('value');
    let counterValue = 0; 
    value.innerHTML = counterValue; 
    const getValue = (key) => {if (key === increment) { counterValue +=1} else { counterValue -=1};}
  
  const incrementButton = document.querySelector('[data-action="increment"]');
  const  decrementButton = document.querySelector('[data-action="decrement"]');
  incrementButton.addEventListener( "click" , getValue('[data-action="increment"]'));
  decrementButton.addEventListener( "click" , getValue('[data-action="decrement"]'));
  
  
