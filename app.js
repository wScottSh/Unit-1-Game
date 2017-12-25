
const player1 = getElementById('player1');
const player2 = getElementById('player2');
let player1Position = 0;
let player2Position = window.innerWidth;



function playGame  () {
  document.addEventListener('keypress', (event) => {
    if (event.key === 'q') {
      player1 = player1 -=15;
    }
    else if (event.key === 'a'){
    player1 = player1 += 15;
    }
    else if (event.key === 'p'){
      player2 = player2 -= 15;
    }
    else if (event.key === 'l'){
      player2 = player2 += 15;
    }
playGame();
