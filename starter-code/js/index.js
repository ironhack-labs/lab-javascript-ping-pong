var board = new Board();
var ball = new Ball();
var paddleUser = new PaddleUser();
var board = new Board();

function updateState() {}

function activatePaddle2() {
  var x = $("#paddle-computer").position().top;
  var interval2 = setInterval(function() {
      $("#paddle-computer").css({
          top: x = ball.x - 275
        });
      }, 30);
  }

  function renderGame() {
    renderBall();
    renderPaddle();
  }

  var score = 0;

  function renderScore() {
    score++;
    $(".left > span").empty();
    $("#computer-result").append(score);
    renderGame();
  }

  function renderBall() {
    ball.restart();
    ball.move();
    activatePaddle2();
  }

  function renderPaddle() {
    paddleUser.restart();
    paddleUser.userMovement();
  }

  renderGame();
