import { loadProfile, getSkater, saveSkater, findbyId, createChoice, scoreAdventure } from '../common/utils.js';
import adventures from '../data/adventures-data.js';

loadProfile();

const searchParams = new URLSearchParams(window.location.search);
const adventureId = searchParams.get('id');
const adventure = findbyId(adventures, adventureId);

// if (!adventure) {
//     window.location = '../track';
// }

const title = document.getElementById('title');
const image = document.getElementById('adventure-image');
const description = document.getElementById('description');
const gameForm = document.getElementById('game-form');
const choices = document.getElementById('answers');
const results = document.getElementById('results');
const resultsDescription = document.getElementById('results-description');


title.textContent = adventure.title;
image.src = '../assets/' + adventure.image;
description.textContent = adventure.description;

for (let i = 0; i < adventure.choices.length; i++) {
    const choice = adventure.choices[i];
    const choiceOnPage = createChoice(choice);
    choices.appendChild(choiceOnPage);
}

gameForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(gameForm);
    const choiceId = formData.get('choice');
    const choice = findbyId(adventure.choices, choiceId);

    const skater = getSkater();
    scoreAdventure(choice, adventure.id, skater);
    saveSkater(skater);

    description.classList.add('hidden');
    gameForm.classList.add('hidden');
    results.classList.remove('hidden');
    resultsDescription.classList.remove('hidden');
    resultsDescription.textContent = choice.result;

    loadProfile();
});