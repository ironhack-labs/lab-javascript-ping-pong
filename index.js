var board = new Board();

$('#start').on('click', function(){
  board.start();
  activatePaddle2();
  var game = setInterval(updateState,20);
  renderGame();
});

function updateState(){
  $('#paddle1').css('top', board.paddle1.y);
}

$(document).on('keydown', function(e){
  var keyPressed = event.keyCode;
  if (keyPressed === 40 && board.paddle1.y < 900) { board.paddle1.y += 10; }
  if (keyPressed === 38 && board.paddle1.y > 0)   { board.paddle1.y -= 10; }
});

function activatePaddle2() {
  setInterval(function(){
    if (board.ball.y < board.paddle2.y && board.paddle2.y > 0) {
       board.paddle2.y -= 10;
    }
    if (board.ball.y > board.paddle2.y && board.paddle2.y < 900) {
       board.paddle2.y += 10;
    }
  }, 20);
}

function renderGame(){
  setInterval(function(){
    renderBall();
    renderPaddle();
  }, 20);
}

function renderBall(){
  var ballElement = document.getElementById("ball");

  ballElement.style.left = (board.ball.x + 100) + "px";
  ballElement.style.top  = (board.ball.y + 100) + "px";

}

function renderPaddle(){
  var paddle1Element = document.getElementById("paddle1");
  var paddle2Element = document.getElementById("paddle2");

  paddle1Element.style.top  = (board.paddle1.y) + "px";
  paddle2Element.style.top  = (board.paddle2.y) + "px";

}
