const inputEl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');
inputEl.addEventListener ('input', function() {
    spanText.style.fontSize = inputEl.value + 'px';
   
});






