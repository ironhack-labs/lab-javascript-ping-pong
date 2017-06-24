var board = new Board();
var direction, ballSpeed;

$('#start').on('click', function() {
  direction = Math.floor((Math.random() * 4)+1);
  ballSpeed = 10;
  board.start(direction, ballSpeed);
  //var game = setInterval(updateState, intervalTime);
  //renderGame();
});

function updateState() {}

$(document).on('keydown', function(e) {
  switch (e.keyCode) {
    case 38:
      board.paddle1.up();
      break;
    case 40:
      board.paddle1.down();
      break;
  }
});

function activatePaddle2(direction, ballSpeed) {}

function renderGame() {}

function renderScore() {}

function renderBall() {}

function renderPaddle() {}
