// I know you guys reccommended I don't take on a project using canvas because it would be an entirely new thing to learn, but I wanted to
   //take on the challenge and really test myself. And since I dont really celebrate Christmas, I had nothing stopping me, as far as time restrictions. I hope that's ok. Below
   //are the resources I used to learn canvas technique.
//
//
//
//
//Ok! here's my stuff. code will be written below the comment that explains its purpose. Some of the comments may be overly verbose, but I wanted to show you guys that I know the
// purpose for everything since it's a technique not covered in class.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//declare variables. This one was tricky to me. I wasn't sure when to use const or let, and I kept seeing confliction things, so I went
//with let for everything. Logic being: games are dynamic. please let me know what would have been the proper way
//to approach this situation.
    let canvas;
    let canvasContext;
    let ballX = 50;
    let ballY = 50;
//this code makes the ball start at an angle, instead of straight across. 10 over and 4 down.
    let ballSpeedX =3;
    let ballSpeedY =1.5;
    let player1 = 250;
    let player2 = 250;
    let padX = 15;
    let padY = 100;
//action to be taken when browser window opens
window.onload = function() {
       //define var. grabs canvas id from html so it can be manipulated with JS
       canvas = document.getElementById('gameCanvas');
       //define var. this indicates the project will be 2 dimensional
       canvasContext = canvas.getContext('2d');
       //creates the speed of whatever is defined in the createGraphics function. Definitely had to google this.
       //invoking functions inside of a function to let the program know WHAT exactly need to be at that speed
       setInterval(function() {
           createGraphics();
           movement();
       },);

////////////////////////////////////////
canvas.addEventListener('keypress', movePad1, (Event))

let movePad1 =()=> {

    if (e.keyCode === 65) {
      player1 = player1 + 20; //a

    } else if (e.keyCode === 90) { //z
      player1 = player1  - 20;
    }
  }


  canvas.addEventListener('keypress', movePad2, (Event))

  let movePad2 =()=> {

      if (e.keyCode === 75) {
        player2 = player2 + 20; //k

      } else if (e.keyCode === 77) { //m
        player2 = player2  - 20;
      }
    }
///////////////////////////////////////

}
//function that creates actual gameboard and paddles and stuff
let createGraphics = () => {
       //canvas will be filled in black. Sidenote..fillStyle will always refer to the fillRect that is written right after it.
       canvasContext.fillStyle = 'black';
       //this is what defines the actual canvas itself, that will be filled with the above mentioned black.
       //the first two items , 0 0, represent the placement of the canvas. this means the canvas will be in the top left corner.
       //the W and H indicate that the whole thing will be filled black.whe whole W and the whole H.
       canvasContext.fillRect(0,0,canvas.width, canvas.height);
       //same fillStyle and rect methods to create red ball and white paddles.  it is
       //important to write these in order because they will layer on top of each other. for example,
       //if you have a bunch of game pieces all set up on the screen without coloring your canvas first, you will cover up
       //all of your work with it when you finally do color it.
       //paddle 1
       canvasContext.fillStyle = 'green';
       canvasContext.fillRect(0,player1,padX,padY);
       canvasContext.fillStyle = 'green';
       canvasContext.fillRect(canvas.width - padX,player1,padX,padY);
       //paddle2
       //canvasContext.fillStyle = 'white';
       //canvasContext.fillRect(785,100,15,150);

       //ball.. start position has already been defined above, so the fillRect is referring to it.
       canvasContext.fillStyle = 'red';
       //starts creatinf new shape......in canvas, you must write this beginPAth command befroe every line or shape you draw, in order to not have them all connected to each other
       canvasContext.beginPath();
       //creates circular shape for ball......There's no way in hell i would have ever figured this part out on my own. thanks, youTube! I read an article on radians and how a circle
       //is born afterward, to try to understand it better.I guess PI is half a circle? I'm not fully sure. True at the end means the circle is drawn clockwise. counter would be false.
       canvasContext.arc(ballX,ballY,10,0,Math.PI*2, true);
       //fills in circle. there isnt a fillArc command so this command is used instead.
       canvasContext.fill();
}
//function to create functionality. i might move this to ABOVE graphics function. not sure if it matters yet
let movement = () => {
  //define movement variables
       ballX = ballX + ballSpeedX;
       ballY = ballY + ballSpeedY;
       //originally I had this hard-coded with  the ballSpeed from my above variable, but my programmer friend made me realize that it would be more
       //dry to use the variable name, so I wont need to write it again if speed changes or canvas size changes. This code basically says that when the ball hits a side of the canvas, to
       //bounce back to the opposite direction at the same speed.
       if (ballX >= canvas.width) {
           ballSpeedX = -ballSpeedX;
       }
   else if (ballX <= 0) {
           ballSpeedX = -ballSpeedX;
       }
       //this part made me crazy for a while. after i ran this code, my screen showed the ball vibrating on my screen instead of bouncing around.
       //after questioning everythung that is good in this world, I realized i had the  > and < incorrect. after i reversed them, it was fine, and my computer lived to
       //see another day
   else    if (ballY<= 0) {
           ballSpeedY = -ballSpeedY;
       }
   else if (ballY >= canvas.height) {
           ballSpeedY = -ballSpeedY;
       }
}
//invokes the functions.I am not sure if these should go here
createGraphics();
movement();
movePad1();
