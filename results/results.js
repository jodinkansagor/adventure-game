import { loadProfile, getSkater, scoreBruisePoints, scoreAdventure, scoreCoolPoints } from '../common/utils.js';

import { bpMessages, cpMessages } from './messages.js';

loadProfile();

const skater = getSkater();

const storyDisplay = document.getElementById('story');
const storyImg = document.getElementById('results-image');

const bpResult = scoreBruisePoints(skater.bp);
const cpResult = scoreCoolPoints(skater.cp);

const bpMessage = bpMessages[bpResult];
const cpMessage = cpMessages[cpResult];

let story = 'Your first couple weeks on your new team as a new ' + skater.position + ' is coming to a close! ' + skater.name + ', ' + bpMessage + '. ' + cpMessage;

storyDisplay.textContent = story;

storyImg.src = '../assets/wheels-of-justice.jpg';



