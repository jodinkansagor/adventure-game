import { saveSkater } from '../common/utils.js';
import makeSkater from './make-skater.js';

const skaterSignUp = document.getElementById('skater-signup');

skaterSignUp.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(skaterSignUp);
    const skater = makeSkater(formData);

    saveSkater(skater);

    window.location = 'track';





});