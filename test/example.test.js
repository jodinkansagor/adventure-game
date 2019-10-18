import { findbyId, saveSkater } from '../common/utils.js';
import adventures from '../data/adventures-data.js';



const test = QUnit.test;

test('test to see if we can return an object from an id', function(assert) {
    //Arrange
    // Set up your parameters and expectations
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
            result: 'I guess you got your point across! It\'s super awkward, but maybe less weird because you got it out of the way. Next time, try and act cool.',
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
    
    //Act 
    // Call the function you're testing and set the result to a const
    const partyObjectFromId = findbyId(adventures, 'party');
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(partyObjectFromId, party);
});

