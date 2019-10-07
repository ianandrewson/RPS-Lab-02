import { checkResult } from './get-random-throw.js';
import { getRandomThrow } from './get-random-throw.js';

//Initialize DOM elements
    //radio buttons
const playButton = document.getElementById('play-button');
const resultFieldUserThrow = document.getElementById('user-throw');
const resultFieldCompThrow = document.getElementById('computer-throw');
const winnerField = document.getElementById('who-won');
const resultList = document.getElementById('result-list');
const stats = document.getElementById('stats');

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
    stats.textContent = `Wins: ${wins} Loses: ${loses}, Draws: ${draws}`;

    //update result list
    updateResultList(result);
});

//generate LI for OL
const updateResultList = result => {
    let newListItem = document.createElement('li');
    let textForNewListItem = document.createTextNode(result);
    newListItem.appendChild(textForNewListItem);
    resultList.append(newListItem);
};

const displayGameResult = result => {
    if (result === 'win') {
        wins++;
        return 'You won!';
    } else if (result === 'lose') {
        loses++;
        return 'You lost.';
    } else if (result === 'draw') {
        draws++;   
        return 'The game was a draw.';
    }
};