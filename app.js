//defining variables(players, ball)
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const player2 = document.getElementById('ball');

//starting position of players and ball
//hard-coded position. could not use percentage for some reason. tried to have starting pos at 50%

let player1Pos =770;
let player2Pos = 887;

//paddles move to right
const playGame = () => {
 document.addEventListener('keypress', (event) => {
   if (event.key === 'z') {
     player1Pos = player1Pos+ 20;
            player1.setAttribute("style", "position: absolute; left: " + player1Pos + "px");

   } else if (event.key === 'm') {
     player2Pos = player2Pos+ 20;
            player2.setAttribute("style", "position: absolute; left: " + player2Pos + "px");

   }
 })
}

playGame();
