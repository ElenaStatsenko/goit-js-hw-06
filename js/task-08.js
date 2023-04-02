
const form = document.querySelector('.login-form')
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
event.preventDefault();
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    if (input.value === '') { 
    alert("Все поля должны быть заполнены")
    }
});

const formElements = event.currentTarget.elements;
const mail = formElements.email.value;
const password = formElements.password.value;
console.log(mail, password);
const formData = { mail, password};
document.querySelector('.login-form').reset();
};
