var serve = 0
var play = 1

var gameState = "serve";


var ball,img,playerPaddle;
var randY
var randX
var playerScore = 0;

function preload() {
  /* preload your images here of the ball and the paddle */
  ballImage = loadImage("ball.png")
  paddleImage = loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  //create the ball, playerPaddle and computerPaddle as sprite objects

 ball = createSprite(200,200,10,10);
 playerPaddle = createSprite(380,200,10,70); ball.addImage("ball.png",ballImage)
playerPaddle.addImage("paddle.png",paddleImage)
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
  background(205,153,0);
  //place info text in the center
  if (gameState === "serve") {
    text("Press Space to Serve",150,180);
  }
  
  text(playerScore, 220, 15);
    edges = createEdgeSprites();
   ball.bounceOff(edges[0]);
    ball.bounceOff(edges[2]);
    ball.bounceOff(edges[3]);
   ball.bounceOff(playerPaddle);
  playerPaddle.collide(edges);
  
  if (keyDown("up")) {
    playerPaddle.y = playerPaddle.y - 8;
  }
  if (keyDown("down")) {
    playerPaddle.y = playerPaddle.y + 8;
  }
  
  

  //create edge boundaries
  //make the ball bounce with the top and the bottom edges

 if(ball.isTouching(playerPaddle)){
    
  randomVelocity();
  }

 
  
 
   
    //wall_hitSound.play();


  //serve the ball when space is pressed
  if (keyDown("space") && gameState === "serve") {
    ball.velocityX = -9;
    ball.velocityY = -7;
    gameState = "play";
  }
  
 
  //reset the ball to the centre if it crosses the screen
  if(ball.x > 400 || ball.y < 0) {
    if (ball.x > 400 && ball.y > 200) {
      playerScore = playerScore - 1;
    }
    if (ball.x > 400 && ball.y < 200) {
      playerScore = playerScore + 1;
    }
   ball.x = 200;
   ball.y = 200;
   ball.velocityX = 0;
   ball.velocityY = 0;
   gameState ="serve" 
  }
  
  if (playerScore === -5 ) {
    gameState = "over";
    text("Game over ", 170, 160);
    text("press 'R' to restart", 150, 180);
  }
   if ( playerScore === 5) {
    gameState = "over";
    text("You Win !!!!", 170, 160);
    text("press 'R' to restart", 150, 180);
  }
  
  if (keyDown("r") && gameState === "over") {
  
    playerScore = 0;
    gameState = "serve";
  } 
  drawSprites();
}

function randomVelocity(){
  ball.velocityY=random(-9,9);
  ball.velocityxxX=random(-9,9);
}

