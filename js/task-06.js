const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputBlur);
function onInputBlur(event) {
console.log(event.currentTarget.value);
console.log(event.currentTarget.value.length);
}