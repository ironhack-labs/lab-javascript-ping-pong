var board = new Board();
var intervalTime = 10;

$('#start').on('click', function(){
  board.start();
  activatePaddle2();
  var game = setInterval(updateState, intervalTime);
  renderGame();
});

function updateState(){
  $('#paddle1').css('top', board.paddle1.y);
}

$(document).on('keydown', function(e){
  var keyPressed = event.keyCode;
  if (keyPressed === 40 && board.paddle1.y < 500) { board.paddle1.y += 10; }
  if (keyPressed === 38 && board.paddle1.y > 0)   { board.paddle1.y -= 10; }
});

function activatePaddle2() {
  setInterval(function(){
    if (board.ball.y < (board.paddle2.y + 50) && board.paddle2.y > 0) {
       board.paddle2.y -= 10;
    }
    if (board.ball.y > (board.paddle2.y + 50) && board.paddle2.y < 500) {
       board.paddle2.y += 10;
    }
  }, intervalTime);
}

function renderGame(){
  setInterval(function(){
    renderBall();
    renderPaddle();
    renderScore();
  }, intervalTime);
}

function renderScore(){
  var scorePaddle1 = document.getElementById("score-paddle1");
  var scorePaddle2 = document.getElementById("score-paddle2");

  scorePaddle1.innerHTML = board.paddle1.score;
  scorePaddle2.innerHTML = board.paddle2.score;
}

function renderBall(){
  var ballElement = document.getElementById("ball");


  ballElement.style.left = (board.ball.x) + "px";
  ballElement.style.top  = (board.ball.y) + "px";

}

function renderPaddle(){
  var paddle1Element = document.getElementById("paddle1");
  var paddle2Element = document.getElementById("paddle2");

  paddle1Element.style.top  = (board.paddle1.y) + "px";
  paddle2Element.style.top  = (board.paddle2.y) + "px";

}
