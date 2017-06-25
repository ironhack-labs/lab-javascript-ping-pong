var board = new Board();
var ball = new Ball();


$('.btn-start').on('click', function(){
  console.log("start");
  board.start();
  activatePaddle2();
  var game = setInterval(updateState, intervalTime);
  renderGame();
});

function updateState(){
}

$(document).on('keydown', function(e) {
  var x = $("#paddle-user").position().top;

  if (event.keyCode === 38) {
    if (x <=  8) {
      return;
    }
      console.log(x);
    $("#paddle-user").css({
      top: x -= 35
    });
  } else if (event.keyCode === 40) {
    if (x >= 699) {
      return;
    }
    $("#paddle-user").css({
      top: x += 25
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
