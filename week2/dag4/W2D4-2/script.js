/**
 * 
 * Basis voor opbouwen list <ul> van items <li>
 * const listElement = document.createElement("li")
 * listItem.classList.add("list-item-class");
 * const list = document.querySelector("ul");
 * list.appendChild(listItem);
 * 
 */

const bigFiveButtons = document.getElementsByClassName('big-five-button');

const setEventListeners = () => {
    Array.from(bigFiveButtons).forEach(item => {
        item.addEventListener('click',() => {
            addBigFive(item.innerHTML);
        });
    });
};

setEventListeners();

const spottedAnimalsList = document.getElementById('spotted-animals-list');
const spottedAnimals = document.getElementsByClassName('spotted-animals-list-item');

const addBigFive = animalName => {

    const animalSpottedState = Array.from(spottedAnimals).some((item) => {
        return item.innerHTML === animalName;
    });

    if(animalSpottedState===false){
        const listItem = document.createElement("li");
        listItem.classList.add("spotted-animals-list-item");
        listItem.innerHTML = animalName;
        spottedAnimalsList.appendChild(listItem);
    }

};

const removeFirstAnimal = document.getElementById('remove-first-item-button');

const setRemoveFirstAnimalEvent = () => {
    removeFirstAnimal.addEventListener('click', event => {
        removeSpottedAnimal(event);
    });
};

setRemoveFirstAnimalEvent();

const removeSpottedAnimal = event => {

    const animalSpottedState = Array.from(spottedAnimals).find((item) => {
        return item;
    });
    if(animalSpottedState!==undefined){
        animalSpottedState.remove();
    }
    
};

const removeAllAnimals = document.getElementById('remove-all-button');

const setRemoveAllAnimalsEvent = () => {
    removeAllAnimals.addEventListener('click', event => {
        removeAllSpottedAnimals(event);
    });
};

setRemoveAllAnimalsEvent();

const removeAllSpottedAnimals = event => {
    Array.from(spottedAnimals).forEach((item) => {
        item.remove();
    });
};