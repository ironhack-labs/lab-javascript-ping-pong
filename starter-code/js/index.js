
$( document ).ready(function() {

  var playOn = false;
  var board = new Board(400,800);
  var paddle1, paddle2;
  var ball = new Ball(0,0,paddle1, paddle2, board);


  $('#start').on('click', function(){
    if (playOn) {
      playOn=false;

    } else {
      playOn=true;
      ball.restart();
      game = setInterval(updateState, 33);

    }
    //board.start();
    activatePaddle2();

    renderGame();
  });

  $(document).on('keydown', function(e){
    if (e.keyCode == 38 || e.keyCode == 40) {
      movePaddleTop(e.keyCode);
    } else {
      ball.move();
    }
  });

  function updateState(){
    ball.move();
  }

});


function movePaddleTop (keycode){
  var paddle = document.getElementById('paddle1');
  var style = window.getComputedStyle(paddle);
  var top = parseInt(style.top);
  if (keycode == 38) {
    paddle.style.top = (top - 20) + "px";
  } else if (keycode == 40) {
    paddle.style.top = (top + 20) + "px";
  }
}





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
