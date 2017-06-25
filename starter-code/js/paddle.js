function Paddle(x, y) {
  this.x = x;
  this.y = y;
}
Paddle.prototype.restart = function() {};

Paddle.prototype.hitBall = function(ball_y) {};

var speedPaddle = 15;

//move user paddle and control border movements
$(document).keydown(function(event) {
  x = $("#paddle-user").position().top;
  if (event.keyCode === 40) {
    //move down
    if (x < 350) {
      $("#paddle-user").css({
        top: x += speedPaddle
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
        top: x -= speedPaddle
      });
    }
  }



//borrar esta seccion cuando termines las pruebas manuales ya que esto se tendra que controlar de forma automática

  y = $("#paddle-computer").position().top;
  if (event.keyCode === 40) {
    //move down
    if (x < 350) {
      $("#paddle-computer").css({
        top: x += speedPaddle
      });
    }
  } else if (event.keyCode === 38) {
    //move up
    if (x < 5) {
      $("#paddle-computer").css({
        top: x
      });
    } else {
      $("#paddle-computer").css({
        top: x -= speedPaddle
      });
    }
  }

});
