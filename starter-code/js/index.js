var board = new Board();
var paddle1 = new Paddle();
var paddle2 = new Paddle();
var ball = new Ball(150, 200); // top 50 left 200;



var containerTop = $('.container-game').position().top;
var containerHeight = $('.container-game').innerHeight();

$('#start').on('click', function() {
  initPositionBall();
  ball.move(1); // Init direction is 1;
});

function initPositionBall() {
  $('#ball').css({
    top: ball.initPosition.top,
    left: ball.initPosition.left,
    display: 'block'
  });
}

// Calculate max position top of board
function maxTop() {
  var pos = $('#paddle-1').position();
  if (pos.top <= containerTop) {
    return;
  } else {
    return paddle1.up();
  }
}

// Calculate max position bottom of board
function maxBottom() {
  var pos = $('#paddle-1').position();
  if (pos.top >= 337) {
    return;
  } else {
    return paddle1.down();
  }
}

// Listener to move paddle
function moveListeners(event) {
  var keys = [38, 40];
  var pixels;
  var paddle = $('#paddle-1');

  if (keys.indexOf(event.keyCode) < 0)
    return;

  switch (event.keyCode) {

    case 38:
      pixels = maxTop();
      var newPos = paddle.css('top', pixels + 'px').position();
      console.log(newPos);
      break;

    case 40:
      pixels = maxBottom();
      newPos = paddle.css('top', pixels + 'px').position();
      console.log(newPos);
      break;
  }
}

$(document).on('keydown', moveListeners);

function activatePaddle2() {}

function renderGame() {}

function renderScore() {}

function renderBall() {}

function renderPaddle() {}
