var board = new Board();
var paddle = new Paddle();
var ball = new Ball();

$('#start').on('click', function(){
  board.start();
  paddle.movePaddleSecond();
  paddle.movePaddle();
  ball.move();
  var game = setInterval(updateState, intervalTime);
  renderGame();
});

function updateState(){
}

$(document).on('keydown', function(e){
});

function activatePaddle2() {
}

function renderGame(){
}

function renderScore(){
}

function renderBall(){
}

function renderPaddle(){
}
