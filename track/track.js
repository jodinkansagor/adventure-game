import { loadProfile, getSkater, loadFinishedAdventure, loadAdventureLink, hasFinishedTasks } from '../common/utils.js';
import adventures from '../data/adventures-data.js';

loadProfile();

const skater = getSkater();

if (hasFinishedTasks(adventures, skater)) {
    window.location = '../results';
}


const navigateAdventures = document.getElementById('adventures');

for (let i = 0; i < adventures.length; i++) {
    const adventure = adventures[i];
    let adventureDisplay = null;
    if (skater.completed[adventure.id]) {
        adventureDisplay = loadFinishedAdventure(adventure);
    } else {
        adventureDisplay = loadAdventureLink(adventure);
    }
    navigateAdventures.appendChild(adventureDisplay);
}
