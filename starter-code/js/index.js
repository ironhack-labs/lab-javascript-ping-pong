var board = new Board();
var ball = new Ball();


$('.btn-start').on('click', function() {
  board.start();
  ball.move();
  activatePaddle2();
  var game = setInterval(updateState, intervalTime);
  renderGame();
});

function updateState() {}


$(document).on('keydown', function(e) {
  var x = $("#paddle1").position().top;
  if (event.keyCode === 38) {
    if (x <= -230) {
      return;
    }
    $("#paddle1").css({
      top: x -= 35
    });
  } else if (event.keyCode === 40) {
    if (x >= 293) {
      return;
    }
    $("#paddle1").css({
      top: x += 25
    });
  }
  var y = $("#paddle2").position().top;
  if (event.keyCode === 90) {
    if (y <= -230) {
      return;
    }
    $("#paddle2").css({
      top: y -= 35
    });
  } else if (event.keyCode === 88) {
    if (y >= 293) {
      return;
    }
    $("#paddle2").css({
      top: y += 35
    });
  }
});


function activatePaddle2() {}

function renderGame() {}

function renderScore() {}

function renderBall() {}

function renderPaddle() {}
