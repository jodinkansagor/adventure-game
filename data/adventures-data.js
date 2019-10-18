

const practice = {
    id: 'practice',
    title: 'Your first practice!',
    map: {
        top: '5%',
        left: '5%'
    },
    image: 'practice.jpg',
    audio: '',
    description: 'You show up to the first day of practice on a new time. You dont know any of the strategies. What do you do?',
    choices: [{
        id: 'pretend',
        description: 'Pretend like you know what\'s going on and play along',
        result: 'Welp. You tried! You didn\'t interrupt practice, and for that people were appreciative. But you didn\'t have a clue what you were doing, which mean you got a bit banged up. Maybe go home and watch some footage to brush up on some strategies?',
        bp: 30,
        cp: 40
    }, {
        id: 'stop',
        description: 'Stop practice multiple times and make your coaches go over the strategy.',
        result: 'Less talking and more reps! You didn\'t get hurt, but also didn\'t win much favor with your teammates.',
        bp: 5,
        cp: -10
    }, {
        id: 'ask',
        description: 'Find your closest friend on the bench and quietly see if they can help you out.',
        result: 'Not a bad idea finding a buddy to help you out. A few bruises along the way, but your team still likes you!',
        bp: 10,
        cp: 20
    }]
};

const party = {
    id: 'party',
    title: 'After-party time!',
    map: {
        top: '35%',
        left: '5%'
    },
    image: 'party.jpg',
    audio: '',
    description: 'It\'s time for a bout after-party. Your roller derby idol is there. What do you do?',
    choices: [{
        id: 'interrupt',
        description: 'Interrupt their conversation and tell them how amazing you think they are.',
        result: 'I guess you got your point across! Awkward, but straightforward',
        bp: 20,
        cp: 10
    }, {
        id: 'creep',
        description: 'Get creepy about it and "happen" to be in every conversation they are in.',
        result: 'Dude, you need to let it go.',
        bp: -20,
        cp: -20
    }, {
        id: 'stay-cool',
        description: 'Just hang out with your friends. Maybe they will come over and say hi!',
        result: 'Nice work holding a boundary! Your derby idols are people too',
        bp: -20,
        cp: 30
    }]
};

const bout = {
    id: 'bout',
    title: 'It\'s BOUT DAY!',
    map: {
        top: '65%',
        left: '5%'
    },
    image: 'bout.jpg',
    audio: '',
    description: 'Bout day is upon us. What do you eat to get yourself ready for the big event?',
    choices: [{
        id: 'burger',
        description: 'One small burger from your favorite local fast food establishment. Carbs, fat, protein - in one little package.',
        result: 'Not a bad way to go! Not too much to make you vom, but enough to get you through!',
        bp: 0,
        cp: 20
    }, {
        id: 'nothing',
        description: 'Nothing. You are way too nervous to eat.',
        result: 'Well, you didn\'t throw anything up, so I guess that\'s good?',
        bp: 10,
        cp: 10
    }, {
        id: 'everything',
        description: 'All of it - eggs, bacon, toast, fruit, granola, sausage, pizza. What don\'t you eat?',
        result: 'You had the energy to make it work and probably just had to wait a little longer before skating than your teammates. Eat everything all the time.',
        bp: -5,
        cp: 20
    }]
};

// const draft = {
//     id: 'draft',
//     title: 'Draft Night!',
//     map: {
//         top: '25%',
//         left: '70%'
//     },
//     image: '',
//     audio: '',
//     description: 'Think you are going to make a team? Well, it\'s draft night. Let\'s see who get\'s drafted!',
//     choices: [{
//         id: 'new-team',
//         description: 'Interrupt their conversation and tell them how amazing you think they are.',
//         result: 'I guess you got your point across! Awkward, but straightforward',
//         bp: 20,
//         cp: 10
//     }, {
//         id: 'creep',
//         description: 'Get creepy about it and "happen" to be in every conversation they are in.',
//         result: 'Dude, you need to let it go.',
//         bp: -20,
//         cp: -20
//     }, {
//         id: 'stay-cool',
//         description: 'Just hang out with your friends. Maybe they will come over and say hi!',
//         result: 'Nice work holding a boundary! Your derby idols are people too',
//         bp: -20,
//         cp: 30
//     }]
// };

const adventures = [practice, party, bout];

export default adventures;