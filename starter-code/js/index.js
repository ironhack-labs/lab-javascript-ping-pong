var board = new Board();
var ball = new Ball();
var userPaddle = new Paddle(0,0);

$('#start').on('click', function(){
  board.start();
  activatePaddle2();
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
