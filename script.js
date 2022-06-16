
// New Game Screen

const newGame = (() => {
    const display = () => {
        const container = document.querySelector('#new-game');
        const multiplayer = document.querySelector('#multiplayer');

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

newGame.display();