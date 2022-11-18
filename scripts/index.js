const form = document.querySelector(".todo__form");
const inputName = form.querySelector("#name");
const inputDescription = form.querySelector("#description");

// создали шаблон карточки
const cardTemplate = document.querySelector('#card').content;

// Выбираем куда вставлять будем 
const gridElement = document.querySelector('.grid');

function createCard(name, description){
    const cardElement = cardTemplate.querySelector('.grid__item').cloneNode(true);
    const titleForm = cardElement.querySelector('.grid__title');
    const subtitleForm = cardElement.querySelector('.grid__subtitle');
    titleForm.textContent = name;
    subtitleForm.textContent = description;
    cardElement.addEventListener('click', () =>{
        doneTask(cardElement);
    })
    return cardElement;
}

function doneTask(element){
    const buttonDone = element.querySelector('.grid__button');
    buttonDone.classList.add('grid__button_active');
    const divEl = buttonDone.closest('.grid__item');
    divEl.classList.add('grid__item_active');
    buttonDone.addEventListener('click', () => {
        divEl.remove();
    })
}

function addCard(card, container) {
    container.prepend(card);
} 

function clearInputs(){
    inputName.value = '';
    inputDescription.value = '';
}

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    addCard(createCard(inputName.value, inputDescription.value), gridElement);
    clearInputs();
})