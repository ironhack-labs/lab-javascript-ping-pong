var board = new Board();
var paddle = new Paddle(50,200);
var myPaddle = $("#paddle1");
var otherPaddle = $("#paddle2");
var paddle2 = new Paddle(50, 1100);
var ball = new Ball("","",paddle.positionX+50, paddle2.positionX+50);
var myBall = $("#ball");

$(document).ready(function(){

setInterval(function(){ball.move();}, 40);

$('#start').on('click', function(){
  board.start();
  activatePaddle2();
  ball.randomDirection();

  renderGame();


});

$(document).on('keydown', function(e){
  if(e.which === 81){
    paddle.moveUp(myPaddle);
  }
  if(e.which === 65){
    paddle.moveDown(myPaddle);
  }
  if(e.which === 38){
    paddle2.moveUp(otherPaddle);
  }
  if(e.which === 40){
    paddle2.moveDown(otherPaddle);
  }
});
});
