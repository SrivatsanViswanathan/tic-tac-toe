
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
        const player1 = document.querySelector('#player1');
        const player1Title = document.querySelector('#player1-heading');
        const player2 = document.querySelector('#player2');
        const player2Title = document.querySelector('#player2-heading');
        homeScreen.addEventListener('click', () => {
            player1.value = '';
            player2.value = '';
            player1Title.textContent = 'Player 1';
            player2Title.textContent = 'Player 2';
            console.log(player1.value);
            nameChange.classList.remove('active');
            buttonSubmit.classList.add('remove');
            nameChange.style.display = '';
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


const players = (name1, name2) => {
    const player1 = document.querySelector('#player1-heading');
    const player2 = document.querySelector('#player2-heading');
    console.log(name1);
    const getName = () => {
        if (name1 === '') {
            console.log('s');
            player1.textContent = 'Player 1';
        }
        else {
            player1.textContent = name1;
        }

        if (name2 === '') {
            player2.textContent = 'Player 2';
        }
        else {
            player2.textContent = name2;
        }
    }
    return {getName};
}
const formInformation = (() => {
    const formButton = document.querySelector('#submit');
    const form = () => {
        formButton.addEventListener('click', () => {
            const player1 = document.querySelector('#player1');
            const player2 = document.querySelector('#player2');
            const player = players(player1.value, player2.value);
            player.getName();
            player1.value = '';
            player2.value = '';
        });
    }
    return {form};

})();

newGame.display();
multiplayer.modal();
multiplayer.redo();
formInformation.form();