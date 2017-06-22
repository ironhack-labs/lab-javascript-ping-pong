var board = new Board();
var ball = new Ball(300, 300, null, null);

$('#start').on('click', function(){
  console.log("hola");
  board.start();
  setInterval(ball.move(), 1);
  activatePaddle2();
  // var game = setInterval(updateState, intervalTime);
  renderGame();
});

function updateState(){
}

$(document).on('keydown', function(e){
  var x = $("#paddle2").position().top;
  console.log(x);
  if (e.keyCode == 38) {
    if (x <= 0) {
      return;
    }
    $("#paddle2").css({
        top: x -= 20
    });
  } else if (e.keyCode == 40) {
    if (x >= 440) {
      return;
    }

    $("#paddle2").css({
      top: x += 20
    });
  }
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
