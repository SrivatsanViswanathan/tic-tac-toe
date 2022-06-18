// Game Board Object
const gameBoard = {
    array: ['', '', '', '', '', '', '', '', '']
}

// Create Player Objects
const players = (name, player) => {
    const player1 = document.querySelector('#player1-heading');
    const player2 = document.querySelector('#player2-heading');
    if (name === '') {
        name = player;
    }
    const getName = () => {
        if (name === '') {
            if (player === 'Player 1') {
                player1.textContent = player;
            }
            else {
                player2.textContent = player;
            }
        }
        else {
            if (player === 'Player 1') {
                player1.textContent = name;
            }
            else if (player === 'Player 2') {
                player2.textContent = name;
            }
        }
        winner.findWinner();
    }
    return {getName, name, player};
}

const updateGameBoard = (() => {
    const squares = document.querySelectorAll('.square');
    const fillGameBoard = () => {
        for (let i = 0; i < gameBoard.array.length; i++) {
            squares[i].addEventListener('click', () => {
                let win = winner.getWin();
                if (!win) {
                    if (xcount === ocount && squares[i].getAttribute('value') != 'true') {
                        gameBoard.array[i] = 'X';
                    }
                    else if (xcount > ocount && squares[i].getAttribute('value') != 'true') {
                        gameBoard.array[i] = 'O';
                    }

                    squares[i].textContent = gameBoard.array[i];
                    if (gameBoard.array[i].includes('X') && squares[i].getAttribute('value') != 'true') {
                        xcount++;
                        squares[i].setAttribute('value', 'true');
                    }
                    if (gameBoard.array[i].includes('O') && squares[i].getAttribute('value') != 'true') {
                        ocount++;
                        squares[i].setAttribute('value', 'true');
                    }
                    winner.findWinner();
                }
            });
        }
    }
    return {fillGameBoard};
})();

// New Game Screen
const newGame = (() => {
    const container = document.querySelector('#new-game');
    const multiplayer = document.querySelector('#multiplayer');
    
    const display = () => {
        multiplayer.style.display = 'none';
        container.style.display = 'flex';
        container.addEventListener('click', (e) => {
            const button = e.target.nodeName === 'BUTTON';
            const mButton = e.target.id === 'mButton';
            const sButton = e.target.id === 'sButton';

            if (button && mButton) {
                container.style.display = 'none';
                multiplayer.style.display = 'flex'
            }
            else if (button && sButton) {
                container.style.display = 'none';
            }
            else {
               return;
            }
        });
    }
    return {display};
})();

// Multiplayer Screen
const multiplayer = (() => {
    const nameChange = document.querySelector('#change-name');
    const button = document.querySelector('#cButton');
    const buttonSubmit = document.querySelector('#submit');
    const restartButton = document.querySelector('#restart');
    const playAgainButton = document.querySelector('#play-again')
    const message = document.querySelector('#message');
    const squares = document.querySelectorAll('.square');
    const modal = () => {
        button.addEventListener('click', () => {
            if (nameChange.style.display === '') {      
                active();
            }
            else { 
                notActive();
            }
        });
    }
    const newGame = () => {
        restartButton.addEventListener('click', () => {
            restart.homeScreen();
        });
    }
    function active() {
        nameChange.style.display = 'grid';
        nameChange.classList.add('active');
        buttonSubmit.classList.remove('remove');
    }
    function notActive() {
        nameChange.classList.remove('active');
        buttonSubmit.classList.add('remove');
        window.setTimeout(timing, 1500);
        function timing() {
            nameChange.style.display = '';
        }
    }
    const playAgain = () => {
        playAgainButton.addEventListener('click', () => {
            for (let i = 0; i < 9; i++) {
                squares[i].textContent = '';
                gameBoard.array[i] = '';
                squares[i].setAttribute('value', 'false');
            }
            xcount = 0;
            ocount = 0;
            message.textContent = 'Undecided';
            message.style.visibility = 'hidden';
            winner.setWin(false);
        });
    }
    return {modal, newGame, playAgain};
})();

// Restart Everything -- Go back to Home Screen
const restart = (() => {
    const homeScreen = () => {
        const nameChange = document.querySelector('#change-name');
        const buttonSubmit = document.querySelector('#submit');
        const player1Input = document.querySelector('#player1');
        const player1Title = document.querySelector('#player1-heading');
        const player2Input = document.querySelector('#player2');
        const player2Title = document.querySelector('#player2-heading');
        const squares = document.querySelectorAll('.square');
        const message = document.querySelector('#message');
        for (let i = 0; i < 9; i++) {
            squares[i].textContent = '';
            gameBoard.array[i] = '';
            squares[i].setAttribute('value', 'false');
        }
        player1Input.value = '';
        player2Input.value = '';
        player1Title.textContent = 'Player 1';
        player2Title.textContent = 'Player 2';
        nameChange.classList.remove('active');
        buttonSubmit.classList.add('remove');
        nameChange.style.display = '';
        player1 = players('Player 1', 'Player 1');
        player2 = players('Player 2', 'Player 2');
        xcount = 0;
        ocount = 0;
        message.textContent = 'Undecided';
        message.style.visibility = 'hidden';
        winner.setWin(false);
        newGame.display();
    }
    return {homeScreen};
})();

// Get Player Name Change
const formInformation = (() => {
    const formButton = document.querySelector('#submit');
    const form = () => {
        formButton.addEventListener('click', () => {
            const player1Name = document.querySelector('#player1');
            const player2Name = document.querySelector('#player2');
            player1 = players(player1Name.value, 'Player 1');
            player2 = players(player2Name.value, 'Player 2');
            player1.getName();
            player2.getName();
            player1Name.value = '';
            player2Name.value = '';
        });
    }
    return {form};
})();

// Find the Winner
const winner = (() => {
    const message = document.querySelector('#message');
    let win = false;
    let player = '';
    const getWin = () => {
        return win;
    }
    const setWin = (winner) => {
        win = winner;
    }
    const findWinner = () => {
        for (let i = 0; i < 9; i = i + 3) {
            if (gameBoard.array[i] === 'X' || gameBoard.array[i] === 'O') {
                if (gameBoard.array[i] === gameBoard.array[i + 1] && gameBoard.array[i] === gameBoard.array[i + 2]) {
                    winner.setWin(true);
                    player = gameBoard.array[i];
                }
            }
        }
        for (let i = 0; i < 3; i++) {
            if (gameBoard.array[i] === 'X' || gameBoard.array[i] === 'O') {
                if (gameBoard.array[i] === gameBoard.array[i + 3] && gameBoard.array[i] === gameBoard.array[i + 6]) {
                    winner.setWin(true);
                    player = gameBoard.array[i];
                }
            }
        }
        for (let i = 0; i < 3; i = i + 2) {
            if (gameBoard.array[i] === 'X' || gameBoard.array[i] === 'O') {
                if (gameBoard.array[i] === gameBoard.array[i + 4] && gameBoard.array[i] === gameBoard.array[i + 8]) {
                    winner.setWin(true);
                    player = gameBoard.array[i];
                }
                else if (i === 2 && gameBoard.array[i] === gameBoard.array[i + 2] && gameBoard.array[i] === gameBoard.array[i + 4]) {
                    winner.setWin(true);
                    player = gameBoard.array[i];
                }
            }
        }
        if (win) {
            message.style.visibility = 'visible';
            if (player === 'X') {
                message.textContent = player1.name + ' is the Winner!';
            }
            else {
                message.textContent = player2.name + ' is the Winner!';
            }
        }
        else if (!win && ((xcount + ocount) === 9)) {
            message.style.visibility = 'visible';
            message.textContent = 'Tie Game!';
        }
    }
    return {findWinner, getWin, setWin};
})();

let xcount = 0;
let ocount = 0;

let player1 = players('Player 1', 'Player 1');
let player2 = players('Player 2', 'Player 2');

winner.setWin(false);

newGame.display();
multiplayer.modal();
multiplayer.playAgain();
multiplayer.newGame();
formInformation.form();
updateGameBoard.fillGameBoard();