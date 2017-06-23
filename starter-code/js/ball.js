function Ball(x, y, paddle1, paddle2) {
  this.direction = 1;
  this.x = x;
  this.y = y;
}

Ball.prototype.randomDirection = function() {
  //firts direction of the game
  // $(document).keydown(function(event) {
  //   x = $("#ball").position().top;
  //   console.log("la posicion de ball respecto a la izq es" + x);
  //   if (event.keyCode === 40) {
  //     $("#ball").css({left:x+=20});
  //   }else if(event.keyCode === 38) {
  //   }
  // });
};

Ball.prototype.move = function(direction) {
  this.direction = direction;
  var that = this;
  var ballSpeed = 3;
  var intervalId = setInterval(function() {
    var ballVerticalPosition = $("#ball").position().top;
    var ballHorizontalPosition = $("#ball").position().left;
    var humanPaddleVerticalPosition = $("#paddle-user").position().top;
    var humanPaddleHorizontalPosition = $("#paddle-user").position().left;
    var computerPaddleVerticalPosition = $("#paddle-computer").position().top;
    var computerPaddleHorizontalPosition = $("#paddle-computer").position().left;
    switch (that.direction) {
      case 1:
        // console.log(humanPaddleVerticalPosition, humanPaddleHorizontalPosition, ballVerticalPosition, ballHorizontalPosition);
        if ((humanPaddleVerticalPosition < ballVerticalPosition) && (ballVerticalPosition < humanPaddleVerticalPosition + 50) && (ballHorizontalPosition < humanPaddleHorizontalPosition) && (ballHorizontalPosition > humanPaddleHorizontalPosition - 10)) {
          that.direction = 4;
          // console.log("El paddle! cambio a direccion 4");
        }
        if (ballVerticalPosition > 5 && ballHorizontalPosition < 895) {
          $("#ball").css({
            top: ballVerticalPosition -= ballSpeed,
            left: ballHorizontalPosition += ballSpeed
          });
          // console.log("Primer If -> voy en direccion 1");
        } else if (ballHorizontalPosition > 895) {
          that.direction = 4;
          // console.log("Segundo if -> voy en direccion 4");
        } else {
          that.direction = 2;
          // console.log("El else!!! voy en direccion 2");
        }
        break;
      case 2:
        if ((humanPaddleVerticalPosition < ballVerticalPosition) && (ballVerticalPosition < humanPaddleVerticalPosition + 50) && (ballHorizontalPosition < humanPaddleHorizontalPosition) && (ballHorizontalPosition > humanPaddleHorizontalPosition - 10)) {
          that.direction = 3;
        }
        if (ballVerticalPosition < 395 && ballHorizontalPosition < 895) {
          $("#ball").css({
            top: ballVerticalPosition += ballSpeed,
            left: ballHorizontalPosition += ballSpeed
          });
        } else if (ballHorizontalPosition > 895) {
          that.direction = 3;
        } else {
          that.direction = 1;
        }
        break;
      case 3:
        // //hay que ver en la siguiente linea si las experiones para saber si la bola toca la raqueta están bien, me da que al ser la raqueta izquierda tiene que ser al reves en el eje horizontal que el de la raqueta derecha
        if ((computerPaddleVerticalPosition < ballVerticalPosition) && (ballVerticalPosition < computerPaddleVerticalPosition + 50) && (ballHorizontalPosition > computerPaddleHorizontalPosition) && (ballHorizontalPosition < computerPaddleHorizontalPosition + 30)) {
            that.direction = 2;
            console.log("funciona3!!!!!!!!!!!!");
        }
        if (ballVerticalPosition < 395 && ballHorizontalPosition > 5) {
          $("#ball").css({
            top: ballVerticalPosition += ballSpeed,
            left: ballHorizontalPosition -= ballSpeed
          });
        } else if (ballHorizontalPosition < 5) {
          that.direction = 2;
        } else {
          that.direction = 4;
        }
        break;
      case 4:
        if ((computerPaddleVerticalPosition < ballVerticalPosition) && (ballVerticalPosition < computerPaddleVerticalPosition + 50) && (ballHorizontalPosition > computerPaddleHorizontalPosition) && (ballHorizontalPosition < computerPaddleHorizontalPosition + 30)) {
          that.direction = 1;
          console.log("funciona4!!!!!!!!!!!!");
        }
        if (ballVerticalPosition > 5 && ballHorizontalPosition > 5) {
          $("#ball").css({
            top: ballVerticalPosition -= ballSpeed,
            left: ballHorizontalPosition -= ballSpeed
          });
        } else if (ballHorizontalPosition < 15) {
          that.direction = 1;
        } else {
          console.log(ballHorizontalPosition, ballVerticalPosition);
          that.direction = 3;
        }
        break;

    }
  }, 30);
};

Ball.prototype.pointScored = function() {};

// returns winner paddle or false
Ball.prototype.winner = function() {};

Ball.prototype.restart = function() {};
