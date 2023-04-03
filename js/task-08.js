
const form = document.querySelector('.login-form')
function validation (form) {
    let result = true;
    const allInputs = form.querySelectorAll('input');
    for ( const input of allInputs) {
if (input.value === "") {
    alert('Предупреждение о том, что все поля должны быть заполнены');
    result = false;
}
}
return result;
}
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
event.preventDefault();
if (validation(this) === true) {
const formElements = event.currentTarget.elements;
const mail = formElements.email.value;
const password = formElements.password.value;
console.log(mail, password);
const formData = { mail, password};
 document.querySelector('.login-form').reset(); 
}
}




