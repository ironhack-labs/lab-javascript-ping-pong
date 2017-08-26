var board = new Board();
var paddle1 = new Paddle(110, 300);
var paddle2 = new Paddle(110, 300);
var ball = new Ball();

$('#start').on('click', function() {
      setInterval(function () {
        ball.move();}, 100);
});


$(document).on('keydown', function(e) {
  var key = e.keyCode;
  console.log(key);
  if (key == 87) {
    if (paddle1.positionY > 120) {
      paddle1.positionY -= 20;
      $('#paddle1').css("top", paddle1.positionY);
    }
  }
  if (key == 83) {
    if (paddle1.positionY < 495) {
      paddle1.positionY += 15;
      $('#paddle1').css("top", paddle1.positionY);
    }
  }

  if (key == 38) {
    if (paddle2.positionY > 120) {
      paddle2.positionY -= 20;
      $('#paddle2').css("top", paddle2.positionY);
    }
  }
  if (key == 40) {
    if (paddle2.positionY < 495) {
      paddle2.positionY += 15;
      $('#paddle2').css("top", paddle2.positionY);
    }
  }
});
