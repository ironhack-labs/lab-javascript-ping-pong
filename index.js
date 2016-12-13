var board = new Board();

$('#start').on('click', function(){
  board.start();
  activatePaddle2();
  var game = setInterval(updateState,20);
  renderBall();
});

function updateState(){
  $('#paddle1').css('top', board.paddle1.y);
}

$('#paddle1').on('keydown', function(e){
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
  renderBall();
}

function renderBall(){
  var ballElement = document.getElementById("ball");
  setInterval(function(){
    ballElement.style.left = (board.ball.x + 100) + "px";
    ballElement.style.top  = (board.ball.y + 100) + "px";
  }, 20);
}
