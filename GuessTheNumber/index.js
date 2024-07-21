let randomNumber = parseInt(Math.random() * 10 + 1);

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guesseslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userinput.value);
        validateguess(guess)
    })
}

function validateguess(guess) {
    if (isNaN(guess)) {
        alert('please enter a valid number')
    }
    else if (guess < 1) {
        alert('please enter a number more than 1')
    }
    else if (guess > 100) {
        alert('please enter a number less than 100')
    }
    else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayguess(guess);
            displaymessage(`game is over , random number is : ${ randomNumber }`);
            endgame();
        }
        else {
            displayguess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess) {
    if (guess === randomNumber) {
        displaymessage(`you guess right numberr`);
        endgame();
    }
    else if (guess < randomNumber) {
        displaymessage(`you guess too low number`);
    }
    else if (guess > randomNumber) {
        displaymessage(`you guess too high number`);
    }
}

function displayguess(guess) {
    userinput.value = '';
    guesseslot.innerHTML += `${ guess },`
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displaymessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endgame() {
    userinput.value = '';
    userinput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id= "newGame">Start new Game</h2>`
    startover.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newgamebtn = document.querySelector('#newGame');
    newgamebtn.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 10 + 1);
        prevGuess = [];
        numGuess = 1;
        guesseslot.innerHTML = '';
        remaining.innerHTML = `${ 10 - numGuess + 1 }`;
        userinput.removeAttribute('disabled');
        startover.removeChild(p);
        playGame = true;
    });
}