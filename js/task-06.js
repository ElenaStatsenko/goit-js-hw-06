const inputBtn = document.querySelector('#validation-input');
inputBtn.addEventListener('blur', event => {
  if (
    event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
    return inputBtn.classList.add('valid');
   
  }
  else {
    return  inputBtn.classList.add('invalid');
    
  }
});
