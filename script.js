
// New Game Screen
const newGame = (() => {
    const container = document.querySelector('#new-game');
    const multiplayer = document.querySelector('#multiplayer');
    
    const display = () => {
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
    const restart = () => {
        multiplayer.style.display = 'none'
        container.style.display = 'flex';
    }
    return {display, restart};
})();

const multiplayer = (() => {
    const nameChange = document.querySelector('#change-name');
    const button = document.querySelector('#cButton');
    const buttonSubmit = document.querySelector('#submit');
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
    const redo = () => {
        const homeScreen = document.querySelector('#restart');
        const player1Input = document.querySelector('#player1');
        const player1Title = document.querySelector('#player1-heading');
        const player2Input = document.querySelector('#player2');
        const player2Title = document.querySelector('#player2-heading');
        const squares = document.querySelectorAll('.square');
        const message = document.querySelector('#message');
        homeScreen.addEventListener('click', () => {
            for (let i = 0; i < 9; i++) {
                squares[i].textContent = '';
                gameBoard.array[i] = '';
                squares[i].setAttribute('value', 'false');
            }
            console.log(gameBoard.array);
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
            newGame.restart();
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
    return {modal, redo};
})();


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
        console.log('name', name);
        winner();
    }
    return {getName, name, player};
}
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
            console.log('name2', player1);
        });
    }
    return {form};

})();

const gameBoard = {
    array: ['', '', '', '', '', '', '', '', ''],
    array2: [['', '', ''], ['', '', ''], ['', '', '']]
}

const squares = document.querySelectorAll('.square');

let xcount = 0;
let ocount = 0;
for (let i = 0; i < gameBoard.array.length; i++) {
    squares[i].addEventListener('click', () => {
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
        winner();
    });
    
}
function winner() {
    const message = document.querySelector('#message');
    let winner = false;
    let player = '';
    for (let i = 0; i < 9; i = i + 3) {
        if (gameBoard.array[i] === 'X' || gameBoard.array[i] === 'O') {
            if (gameBoard.array[i] === gameBoard.array[i + 1] && gameBoard.array[i] === gameBoard.array[i + 2]) {
                winner = true;
                player = gameBoard.array[i];
            }
        }

    }
    for (let i = 0; i < 3; i++) {
        if (gameBoard.array[i] === 'X' || gameBoard.array[i] === 'O') {
            if (gameBoard.array[i] === gameBoard.array[i + 3] && gameBoard.array[i] === gameBoard.array[i + 6]) {
                winner = true;
                player = gameBoard.array[i];
            }
        }
    }
    for (let i = 0; i < 3; i = i + 2) {
        if (gameBoard.array[i] === 'X' || gameBoard.array[i] === 'O') {
            if (gameBoard.array[i] === gameBoard.array[i + 4] && gameBoard.array[i] === gameBoard.array[i + 8]) {   
                winner = true;
                player = gameBoard.array[i];
            }
            else if (i === 2 && gameBoard.array[i] === gameBoard.array[i + 2] && gameBoard.array[i] === gameBoard.array[i + 4]) {
                winner = true;
                player = gameBoard.array[i];
            }
        }
    }
    if (winner) {
        message.style.visibility = 'visible';
        if (player === 'X') {
            message.textContent = player1.name + ' is the Winner!';
        }
        else {
            console.log('s');
            console.log(player2);
            message.textContent = player2.name + ' is the Winner!';
        }
    }
    else if (!winner && ((xcount + ocount) === 9)) {
        message.style.visibility = 'visible';
        message.textContent = 'Tie Game!';
    }
}

let player1 = players('Player 1', 'Player 1');
let player2 = players('Player 2', 'Player 2');

newGame.display();
multiplayer.modal();
multiplayer.redo();
formInformation.form();