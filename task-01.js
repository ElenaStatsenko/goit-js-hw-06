const ulCategories = document.querySelector('#categories');
console.log (ulCategories);
const liItemsNumbers = ulCategories.children.length;
console.log ("Number of categories:", liItemsNumbers);
const liItems = document.querySelector('.item');

const ul = document.querySelectorAll('#categories > li');
ul.forEach(el => {

  console.log(
    `Category: ${el.firstElementChild.textContent}
     Elements:  ${el.lastElementChild.children.length}`,
  );
});


