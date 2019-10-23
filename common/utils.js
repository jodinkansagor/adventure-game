
export function saveSkater(skater) {
    const json = JSON.stringify(skater);
    localStorage.setItem('skater', json);
}

export function getSkater() {
    const json = localStorage.getItem('skater');
    if (!json) {
        return null;
    } else {
        const skater = JSON.parse(json);
        return skater;
    }
}

export function loadProfile() {
    const derbyName = document.getElementById('name');
    const helmet = document.getElementById('helmet');
    const bruisePoints = document.getElementById('bp');
    const coolPoints = document.getElementById('cp');

    const skater = getSkater();

    if (!skater) {
        window.location = './';
    }

    helmet.src = '../assets/' + skater.position + '.png';
    derbyName.textContent = skater.name;
    bruisePoints.textContent = skater.bp;
    coolPoints.textContent = skater.cp;
}

export function hasFinishedTasks(adventures, skater) {
    for (let i = 0; i < adventures.length; i++) {
        const adventure = adventures[i];
        if (!skater.completed[adventure.id]) {
            return false;
        }
    }
    return true;
}

export function loadFinishedAdventure(adventure) {
    const span = document.createElement('span');
    span.classList.add('adventure');
    span.classList.add('completed');

    span.style.top = adventure.map.top;
    span.style.left = adventure.map.left;
    
    span.textContent = adventure.title;
    return span;
}

export function loadAdventureLink(adventure) {
    const link = document.createElement('a');

    link.classList.add('adventure');
    link.href = '../adventure/?id=' + adventure.id;
    link.style.top = adventure.map.top;
    link.style.left = adventure.map.left;

    link.textContent = adventure.title;

    return link;
}

export function createChoice(choice) {
    const label = document.createElement('label');
    label.classList.add('choice');

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'choice';
    radio.value = choice.id;
    radio.required = true;
    label.appendChild(radio);

    const description = document.createElement('span');
    description.textContent = choice.description;
    label.appendChild(description);

    return label;
}

export function findbyId(adventures, adventureId) {
    for (let i = 0; i < adventures.length; i++) {
        const adventure = adventures[i];
        if (adventure.id === adventureId) {
            return adventure;
        }
    }
    return null;
}

export function scoreAdventure(choice, adventureId, skater){
    skater.bp += choice.bp;
    skater.cp += choice.cp;
    skater.completed[adventureId] = true;
}

export function scoreBruisePoints(bp) {
    if (bp === 0) {
        return 'ok';
    }
    else if (bp < 50) {
        return 'healthy';
    }
    return 'messedup';
}

export function scoreCoolPoints(cp) {
    if (cp === 0) {
        return 'friend';
    } else if (cp > 50) {
        return 'awesome';
    }
    return 'tool';
}