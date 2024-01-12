let addIngredientsBtn = documentlgetElementById('addIngredientsBtn');
let ingredientList = document.querySelector('.ingredientList');
let ingredientDiv = document.querySelectorAll('.ingredientDiv')[0];

addIngredientsBtn.addEventListener('click', function(){
    let newIngredients = ingredientDiv.cloneNode(true);
    let input = newIngredients.getElementByTagName('input')[0];
    input.value = '';
    ingredientList.appendChild(newIngredients);
})
