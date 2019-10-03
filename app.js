import { checkResult } from './get-random-throw.js';
import { getRandomThrow } from './get-random-throw.js';

//Initialize DOM elements
    //radio buttons
const playButton = document.getElementById('play-button');
const resultFieldUserThrow = document.getElementById('user-throw');
const resultFieldCompThrow = document.getElementById('computer-throw');
const winnerField = document.getElementById('who-won');
const resultList = document.getElementById('result-list');

//Set initial state
let wins = 0;
let loses = 0;
let draws = 0;

//Add Event listeners
playButton.addEventListener('click', () => {
    //play game
    let userThrow = document.querySelector('input:checked').value;
    let compThrow = getRandomThrow();
    let result = checkResult(userThrow, compThrow);
    //update DOM fields
    resultFieldUserThrow.textContent = userThrow;
    resultFieldCompThrow.textContent = compThrow;
    winnerField.textContent = displayGameResult(result);


    //update result list
    //generate to LI for OL
    let newListItem = document.createElement('li');
    let textForNewListItem = document.createTextNode(result);
    newListItem.appendChild(textForNewListItem);
    resultList.append(newListItem);
});

const displayGameResult = result => {
    if (result === 'win') {
        return 'You won!';
    } else if (result === 'lose') {
        return 'You lost.';
    } else if (result === 'draw') {
        return 'The game was a draw.';
    }
};