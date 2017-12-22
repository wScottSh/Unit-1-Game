//written in vanilla JS. The reason being, I want to have a full grasp on it before I move onto jquery. I want to clearly understand both.


//searches html doc for the canvas
let canvas = document.querySelector ('canvas');

//makes canvas full screen
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;



//code below is just practice for html canvas. just trying to get to know it. will likely not end up in //final code for the game.
//creates ability to draw on canvas
let context = canvas.getContext('2d');

//drawing a block. first two numbers are location in px on screen, width and H,  and the second two are shape's width and height
//used this method to mock up a static game
context.fillRect(100, 100, 20, 200);
context.fillRect(1300, 400, 20, 200);
context.fillRect(750, 300, 20, 20);
