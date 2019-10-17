// makes a user from formdata

function makeSkater(formData) {
    const skater = {
        name: formData.get('name'),
        position: formData.get('position'),
        bp: 0,
        cp: 30,
        completed: {}
    };
    return skater;
}

export const newMakeSkater = (formData) => ({
    name: formData.get('name'),
    position: formData.get('position'),
    bp: 0,
    cp: 30,
    completed: {}
});

export default makeSkater;