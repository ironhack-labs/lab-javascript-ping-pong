

function updateState(board){
  board.chekGame();

  activatePaddle2()
  renderGame();
}

function activatePaddle2(board) {
  var follow = setInterval(board.paddle2.followBall()), 100);
}

function renderGame(){
  renderBall();
  renderPaddle();
  renderScore();
}

function renderScore(){
  $(".score1").html(board.player1Score);
  $(".score1").html(board.player2Score);
}

function renderBall(){
  $(".ball").css({
    top: board.ball.position.y,
    left: board.ball.position.x
  });
}

function renderPaddle(){
  $(".paddle1").css({
    top: board.paddle1.y,
    left: board.paddle1.x
  });

  $(".paddle2").css({
    top: board.paddle2.y,
    left: board.paddle2.x
  });
}


$(document).ready(function() {

    $('#start').on('click', function(){
      var board = new Board
      board.start();
      var game = setInterval(updateState, 100);



      activatePaddle2();


  });
  game.start();
});
