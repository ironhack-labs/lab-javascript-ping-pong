function Paddle(x, y) {
  this.x = x;
  this.y = y;
}
Paddle.prototype.restart = function() {};

Paddle.prototype.hitBall = function(ball_y) {};


//move user paddle and control border movements
$(document).keydown(function(event) {
  x = $("#paddle-user").position().top;
  if (event.keyCode === 40) {
    //move down
    if (x < 350) {
      $("#paddle-user").css({
        top: x += 5
      });
    }
  } else if (event.keyCode === 38) {
    //move up
    if (x < 5) {
      $("#paddle-user").css({
        top: x
      });
    } else {
      $("#paddle-user").css({
        top: x -= 5
      });
    }
  }
});

// document.addEventListener(“keydown”,moveListener)
