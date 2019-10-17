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

