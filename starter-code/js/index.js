






$( document ).ready(function() {
  var board = new Board(200,400);
  var ball = new Ball();
  
  $('#start').on('click', function(){
    board.start();
    activatePaddle2();
    var game = setInterval(updateState, intervalTime);
    renderGame();
  });

  $(document).on('keydown', function(e){

    if (e.keyCode == 38 || e.keyCode == 40) {
      movePaddleTop(e.keyCode);
    } else {
      ball.move();
    }
  });

  function movePaddleTop (keycode){
    alert($("paddle1").attr('top'));
    var paddle = document.getElementById('paddle1');
    var style = window.getComputedStyle(paddle);
    var top = parseInt(style.top);
    if (keycode == 38) {
      paddle.style.top = (top - 20) + "px";
    } else if (keycode == 40) {
      paddle.style.top = (top + 20) + "px";
    }
  }
});





function updateState(){
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
