// Game Board Object
const gameBoard = {
    array: ['', '', '', '', '', '', '', '', '']
}

const buildMultiScreen = (() => {
    const multiplayer = document.querySelector('#multiplayer');
    const build = () => {
        //Left Side
        const left = document.createElement('div');
        left.classList.add('left');
        left.setAttribute('id', 'left');
        multiplayer.appendChild(left);

        const changeName = document.createElement('div');
        changeName.classList.add('change-name');
        changeName.setAttribute('id', 'change-name');
        left.appendChild(changeName);

        const form = document.createElement('form');
        form.classList.add('form');
        form.setAttribute('id', 'form');
        form.setAttribute('onsubmit', 'return false;')
        changeName.appendChild(form);

        for (let i = 1; i < 3; i++) {
            const input = document.createElement('div');
            input.classList.add('input');
            form.appendChild(input);

            const label = document.createElement('label');
            label.setAttribute('for', 'player' + i);
            label.setAttribute('id', 'label' + i);
            label.textContent = 'Player ' + i + ":";
            input.appendChild(label);

            const text = document.createElement('input');
            text.setAttribute('type', text);
            text.setAttribute('id', 'player' + i);
            text.setAttribute('name', 'player' + i);
            input.appendChild(text);
        }

        const formButton = document.createElement('div');
        formButton.classList.add('formButton');
        changeName.appendChild(formButton);

        const submit = document.createElement('button');
        submit.classList.add('submit');
        submit.setAttribute('id', 'submit');
        submit.textContent = 'Submit';
        formButton.appendChild(submit);

        const error = document.createElement('div');
        error.classList.add('error');
        error.setAttribute('id', 'error');
        changeName.appendChild(error);

        const buttons = document.createElement('div');
        buttons.classList.add('buttons');
        left.appendChild(buttons);

        const formSubmit = document.createElement('button');
        formSubmit.classList.add('cButton');
        formSubmit.setAttribute('id', 'cButton');
        formSubmit.textContent = 'Change Name';
        buttons.appendChild(formSubmit);


        //Right side
        const right = document.createElement('div');
        right.classList.add('right');
        multiplayer.appendChild(right);

        const top = document.createElement('div');
        top.classList.add('top');
        right.appendChild(top);

        const title = document.createElement('div');
        title.classList.add('title');
        top.appendChild(title);

        for (let i = 1; i < 3; i++) {
            const heading = document.createElement('h3');
            heading.setAttribute('id', 'player' + i + '-heading');
            heading.textContent = 'Player ' + i;
            title.appendChild(heading);
        }

        const middle = document.createElement('div');
        middle.classList.add('middle');
        right.appendChild(middle);

        const gameBoard = document.createElement('gameBoard');
        gameBoard.classList.add('gameBoard');
        middle.appendChild(gameBoard);


        // Game board
        for (let i = 0; i < 9; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('value', 'false');
            if (i <= 2) {
                square.classList.add('one');
            }
            else if (i >= 3 && i <= 5) {
                square.classList.add('two');
            }
            else {
                square.classList.add('three');
            }

            if (i === 0 || i === 3 || i === 6) {
                square.classList.add('first');
            }
            else if (i === 2 || i === 5 || i === 8) {
                square.classList.add('last');
            }
            gameBoard.appendChild(square);
        }

        const bottom = document.createElement('div');
        bottom.classList.add('bottom');
        right.appendChild(bottom);

        const message = document.createElement('div');
        message.classList.add('message');
        message.setAttribute('id', 'message');
        message.textContent = 'Undecided';
        bottom.appendChild(message);

        const buttons2 = document.createElement('div');
        buttons2.classList.add('buttons');
        bottom.appendChild(buttons2);

        const playAgain = document.createElement('button');
        playAgain.classList.add('play-again');
        playAgain.setAttribute('id', 'play-again');
        playAgain.textContent = 'Play Again';
        buttons2.appendChild(playAgain);

        const restart = document.createElement('button');
        restart.classList.add('restart');
        restart.setAttribute('id', 'restart');
        restart.textContent = 'Restart';
        buttons2.appendChild(restart);

        player1 = players('Player 1', 'Player 1');
        player2 = players('Player 1', 'Player 2');
    }

    const destroy = () => {
        multiplayer.textContent = '';
    }

    return {build, destroy};
})();

const buildSingleScreen = (() => {
    const single = document.querySelector('#single-player');
    const build = () => {
        //Left Side
        const left = document.createElement('div');
        left.classList.add('left');
        left.setAttribute('id', 'left');
        single.appendChild(left);

        const changeName = document.createElement('div');
        changeName.classList.add('change-name');
        changeName.setAttribute('id', 'change-name');
        left.appendChild(changeName);

        const form = document.createElement('form');
        form.classList.add('form');
        form.setAttribute('id', 'form');
        form.setAttribute('onsubmit', 'return false;')
        changeName.appendChild(form);

        for (let i = 1; i < 3; i++) {
            const input = document.createElement('div');
            input.classList.add('input');
            form.appendChild(input);

            const label = document.createElement('label');
            label.setAttribute('for', 'player' + i);
            label.setAttribute('id', 'label' + i);
            label.textContent = 'Player ' + i + ":";
            input.appendChild(label);

            const text = document.createElement('input');
            text.setAttribute('type', 'text');
            text.setAttribute('id', 'player' + i);
            text.setAttribute('name', 'player' + i);
            input.appendChild(text);

            if (i === 2) {
                input.style.display = 'none';
                text.style.display = 'none';
                text.value = 'AI';
            }
        }

        const formButton = document.createElement('div');
        formButton.classList.add('formButton');
        changeName.appendChild(formButton);

        const submit = document.createElement('button');
        submit.classList.add('submit');
        submit.setAttribute('id', 'submit');
        submit.textContent = 'Submit';
        formButton.appendChild(submit);

        const error = document.createElement('div');
        error.classList.add('error');
        error.setAttribute('id', 'error');
        changeName.appendChild(error);

        const buttons = document.createElement('div');
        buttons.classList.add('buttons');
        left.appendChild(buttons);

        const formSubmit = document.createElement('button');
        formSubmit.classList.add('cButton');
        formSubmit.setAttribute('id', 'cButton');
        formSubmit.textContent = 'Change Name';
        buttons.appendChild(formSubmit);


        //Right side
        const right = document.createElement('div');
        right.classList.add('right');
        single.appendChild(right);

        const top = document.createElement('div');
        top.classList.add('top');
        right.appendChild(top);

        const title = document.createElement('div');
        title.classList.add('title');
        top.appendChild(title);

        for (let i = 1; i < 3; i++) {
            const heading = document.createElement('h3');
            heading.setAttribute('id', 'player' + i + '-heading');
            heading.textContent = 'Player ' + i;
            if (i === 2) {
                heading.textContent = 'AI';
            }
            title.appendChild(heading);
        }

        const middle = document.createElement('div');
        middle.classList.add('middle');
        right.appendChild(middle);

        const gameBoard = document.createElement('gameBoard');
        gameBoard.classList.add('gameBoard');
        middle.appendChild(gameBoard);


        // Game board
        for (let i = 0; i < 9; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('value', 'false');
            if (i <= 2) {
                square.classList.add('one');
            }
            else if (i >= 3 && i <= 5) {
                square.classList.add('two');
            }
            else {
                square.classList.add('three');
            }

            if (i === 0 || i === 3 || i === 6) {
                square.classList.add('first');
            }
            else if (i === 2 || i === 5 || i === 8) {
                square.classList.add('last');
            }
            gameBoard.appendChild(square);
        }

        const bottom = document.createElement('div');
        bottom.classList.add('bottom');
        right.appendChild(bottom);

        const message = document.createElement('div');
        message.classList.add('message');
        message.setAttribute('id', 'message');
        message.textContent = 'Undecided';
        bottom.appendChild(message);

        const buttons2 = document.createElement('div');
        buttons2.classList.add('buttons');
        bottom.appendChild(buttons2);

        const playAgain = document.createElement('button');
        playAgain.classList.add('play-again');
        playAgain.setAttribute('id', 'play-again');
        playAgain.textContent = 'Play Again';
        buttons2.appendChild(playAgain);

        const restart = document.createElement('button');
        restart.classList.add('restart');
        restart.setAttribute('id', 'restart');
        restart.textContent = 'Restart';
        buttons2.appendChild(restart);

        player1 = players('Player 1', 'Player 1');
        player2 = players('AI', 'Player 2');

    }

    const destroy = () => {
        single.textContent = '';
    }

    return { build, destroy };
})();

// Create Player Objects
const players = (name, player) => {
    const player1 = document.querySelector('#player1-heading');
    const player2 = document.querySelector('#player2-heading');
    const player2Hidden = document.querySelector('#player2');
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
            if (player === 'Player 2' && player2Hidden.style.display === 'none') {
                player2.textContent = 'AI';
                name = 'AI';
            }
        }
        winner.findWinner();
    }
    console.log(name, player);
    return {getName, name, player};
}

// Update the Tic Tac Toe Board
const updateGameBoard = (() => {
    const fillGameBoard = () => {
        const squares = document.querySelectorAll('.square');
        const multiplayer = document.querySelector('#multiplayer');
        for (let i = 0; i < gameBoard.array.length; i++) {
            squares[i].addEventListener('click', () => {
                let win = winner.getWin();
                let repeat = true;
                if (!win) {
                    if (xcount === ocount && squares[i].getAttribute('value') != 'true') {
                        gameBoard.array[i] = 'X';
                    }
                    else if (xcount > ocount && squares[i].getAttribute('value') != 'true') {
                        gameBoard.array[i] = 'O';
                    }

                    if (multiplayer.style.display === 'none' && squares[i].getAttribute('value') != 'true') {
                        repeat = false;
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
                    if (!repeat && !winner.getWin()) {
                        AI.easy();
                        winner.findWinner();
                    }
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
    const single = document.querySelector('#single-player');

    const display = () => {
        multiplayer.style.display = 'none';
        single.style.display = 'none';
        container.style.display = 'flex';
        const mButton = document.querySelector('#mButton');
        const sButton = document.querySelector('#sButton');
        let counter = 0;
        mButton.addEventListener('click', () => {
            if (counter === 0) {
                buildSingleScreen.destroy();
                buildMultiScreen.build();
                multi.modal();
                multi.playAgain();
                multi.newGame();
                formInformation.form();
                updateGameBoard.fillGameBoard();
                container.style.display = 'none';
                multiplayer.style.display = 'flex';
            }
            counter++;
        });

        sButton.addEventListener('click', () => {
            if (counter === 0) {
                buildMultiScreen.destroy();
                buildSingleScreen.build();
                multi.modal();
                multi.playAgain();
                multi.newGame();
                formInformation.form();
                updateGameBoard.fillGameBoard();
                container.style.display = 'none';
                single.style.display = 'flex';
            }
            counter++;
        });
        counter = 0;
    }
    return {display};
})();

// Multiplayer Screen
const multi = (() => {
    const modal = () => {
        const nameChange = document.querySelector('#change-name');
        const cbutton = document.querySelector('#cButton');
        const buttonSubmit = document.querySelector('#submit');
        cbutton.addEventListener('click', () => {
            cbutton.disabled = true;
            window.setTimeout(timing, 1000);
            function timing() {
                cbutton.disabled = false;
            }
            if (nameChange.style.display === '') {      
                active();
            }
            else { 
                notActive();
            }
        });
        buttonSubmit.addEventListener('click', () => {
            const player1Name = document.querySelector('#player1');
            const player2Name = document.querySelector('#player2');
            const validate = formInformation.formValidation(player1Name.value, player2Name.value);;
            if (validate) {
                if (nameChange.style.display === '') {
                    active();
                }
                else {
                    notActive();
                }
            }
        });
    }
    const newGame = () => {
        const restartButton = document.querySelector('#restart');
        restartButton.addEventListener('click', () => {
            restart.homeScreen();
        });
    }
    function active() {
        const nameChange = document.querySelector('#change-name');
        const buttonSubmit = document.querySelector('#submit');
        const form = document.querySelector('#form');
        const error = document.querySelector('#error');
        nameChange.style.display = 'grid';
        nameChange.classList.add('active');
        window.setTimeout(timing, 300);
        function timing() {
            buttonSubmit.classList.add('active');
            form.classList.add('active');
            error.classList.add('active');
        }
    }
    function notActive() {
        const nameChange = document.querySelector('#change-name');
        const form = document.querySelector('#form');
        const error = document.querySelector('#error');
        const buttonSubmit = document.querySelector('#submit');
        nameChange.classList.remove('active');
        window.setTimeout(timing, 300);
        window.setTimeout(timing2, 1500);
        function timing() {
            form.classList.remove('active');
            buttonSubmit.classList.remove('active');
            error.classList.remove('active');
        }
        function timing2() {
            nameChange.style.display = '';
        }
    }
    const playAgain = () => {
        const squares = document.querySelectorAll('.square');
        const message = document.querySelector('#message');
        const playAgainButton = document.querySelector('#play-again');
        playAgainButton.addEventListener('click', () => {
            for (let i = 0; i < 9; i++) {
                squares[i].textContent = '';
                squares[i].style.backgroundColor = 'white';
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


// Single Player Screen
const singlePlayer = (() => {
    const parent = document.querySelector('#single-player');
    const nameChange = document.querySelector('#change-name');
    const cbutton = document.querySelector('#cButton');
    const buttonSubmit = document.querySelector('#submit');
    const restartButton = document.querySelector('#restart');
    const playAgainButton = document.querySelector('#play-again');
    const message = document.querySelector('#message');
    const squares = document.querySelectorAll('.square');
    const form = document.querySelector('#form');
    const error = document.querySelector('#error');
    const modal = () => {
        cbutton.addEventListener('click', () => {
            cbutton.disabled = true;
            window.setTimeout(timing, 1000);
            function timing() {
                cbutton.disabled = false;
            }
            if (nameChange.style.display === '') {
                active();
            }
            else {
                notActive();
            }
        });
        buttonSubmit.addEventListener('click', () => {
            const player1Name = document.querySelector('#player1');
            const player2Name = document.querySelector('#player2');
            const validate = formInformation.formValidation(player1Name.value, player2Name.value);
            if (validate) {
                if (nameChange.style.display === '') {
                    active();
                }
                else {
                    notActive();
                }
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
        window.setTimeout(timing, 300);
        function timing() {
            buttonSubmit.classList.add('active');
            form.classList.add('active');
            error.classList.add('active');
        }
    }
    function notActive() {
        nameChange.classList.remove('active');
        window.setTimeout(timing, 300);
        window.setTimeout(timing2, 1500);
        function timing() {
            form.classList.remove('active');
            buttonSubmit.classList.remove('active');
            error.classList.remove('active');
        }
        function timing2() {
            nameChange.style.display = '';
        }
    }
    const playAgain = () => {
        playAgainButton.addEventListener('click', () => {
            for (let i = 0; i < 9; i++) {
                squares[i].textContent = '';
                squares[i].style.backgroundColor = 'white';
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
        const player1Input = document.querySelector('#player1');
        const player1Title = document.querySelector('#player1-heading');
        const player2Input = document.querySelector('#player2');
        const player2Title = document.querySelector('#player2-heading');
        const squares = document.querySelectorAll('.square');
        const message = document.querySelector('#message');
        const form = document.querySelector('#form');
        const formButton = document.querySelector('#submit');
        const error = document.querySelector('#error');
        for (let i = 0; i < 9; i++) {
            squares[i].textContent = '';
            squares[i].style.backgroundColor = 'white';
            gameBoard.array[i] = '';
            squares[i].setAttribute('value', 'false');
        }
        player1Input.value = '';
        player2Input.value = '';
        error.textContent = '';
        player1Title.textContent = 'Player 1';
        player2Title.textContent = 'Player 2';
        nameChange.classList.remove('active');
        form.classList.remove('active');
        formButton.classList.remove('active');
        nameChange.style.display = '';
        player1 = players();
        player2 = players();
        xcount = 0;
        ocount = 0;
        message.textContent = 'Undecided';
        message.style.visibility = 'hidden';
        winner.setWin(false);
        buildMultiScreen.destroy();
        buildSingleScreen.destroy();
        newGame.display();
    }
    return {homeScreen};
})();

// Get Player Name Change
const formInformation = (() => {   
    const form = () => {
        const formButton = document.querySelector('#submit');
        formButton.addEventListener('click', () => {
            const player1Name = document.querySelector('#player1');
            const player2Name = document.querySelector('#player2');
            const validate = formValidation(player1Name.value, player2Name.value);
            if (validate) {
                player1 = players(player1Name.value, 'Player 1');
                player2 = players(player2Name.value, 'Player 2');
                player1.getName();
                player2.getName();
                player1Name.value = '';
                player2Name.value = '';
            }
        });
    }
    const formValidation = (player1, player2) => {
        const error = document.querySelector('#error');
        if (player1 === player2 && player1 != '') {
            error.textContent = "* Players can't have the same name";
            return false;
        }
        else {
            error.textContent = ''
            return true;
        }
    }  
    return {form, formValidation};
})();

// Find the Winner
const winner = (() => {
    let win = false;
    let player = '';
    const getWin = () => {
        return win;
    }
    const setWin = (winner) => {
        win = winner;
    }
    const findWinner = () => {
        const message = document.querySelector('#message');
        const squares = document.querySelectorAll('.square');
        for (let i = 0; i < 9; i = i + 3) {
            if (gameBoard.array[i] === 'X' || gameBoard.array[i] === 'O') {
                if (gameBoard.array[i] === gameBoard.array[i + 1] && gameBoard.array[i] === gameBoard.array[i + 2]) {
                    winner.setWin(true);
                    player = gameBoard.array[i];
                    squares[i].style.backgroundColor = squares[i + 1].style.backgroundColor = squares[i + 2].style.backgroundColor = 'green';
                }
            }
        }
        for (let i = 0; i < 3; i++) {
            if (gameBoard.array[i] === 'X' || gameBoard.array[i] === 'O') {
                if (gameBoard.array[i] === gameBoard.array[i + 3] && gameBoard.array[i] === gameBoard.array[i + 6]) {
                    winner.setWin(true);
                    player = gameBoard.array[i];
                    squares[i].style.backgroundColor = squares[i + 3].style.backgroundColor = squares[i + 6].style.backgroundColor = 'green';
                }
            }
        }
        for (let i = 0; i < 3; i = i + 2) {
            if (gameBoard.array[i] === 'X' || gameBoard.array[i] === 'O') {
                if (gameBoard.array[i] === gameBoard.array[i + 4] && gameBoard.array[i] === gameBoard.array[i + 8]) {
                    winner.setWin(true);
                    player = gameBoard.array[i];
                    squares[i].style.backgroundColor = squares[i + 4].style.backgroundColor = squares[i + 8].style.backgroundColor = 'green';
                }
                else if (i === 2 && gameBoard.array[i] === gameBoard.array[i + 2] && gameBoard.array[i] === gameBoard.array[i + 4]) {
                    winner.setWin(true);
                    player = gameBoard.array[i];
                    squares[i].style.backgroundColor = squares[i + 2].style.backgroundColor = squares[i + 4].style.backgroundColor = 'green';
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

const AI = (() => {
    const easy = () => {
        const array = [];
        const squares = document.querySelectorAll('.square');
        for (let i = 0; i < 9; i++) {
            if (squares[i].getAttribute('value') === 'false') {
                array.push(i);
            }
            if (squares[i].getAttribute('value') === 'true') {
                array.splice(i, 1);
            }
        }
        let x = Math.floor(Math.random() * array.length);
        let location = array[x];
        console.log(array);
        
        gameBoard.array[location] = 'O';
    
        console.log(gameBoard.array);
        squares[location].textContent = gameBoard.array[location];
        squares[location].setAttribute('value', 'true');
        ocount++;
    }
    return {easy};
})();

let xcount = 0;
let ocount = 0;

let player1 = players();
let player2 = players();

winner.setWin(false);


newGame.display();


//singlePlayer.modal();
//singlePlayer.playAgain();
//singlePlayer.newGame();

