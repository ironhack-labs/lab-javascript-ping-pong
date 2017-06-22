function Ball(x, y, paddle1, paddle2) {
  this.direction = 1;
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
  var ballSpeed = 2;
  var intervalId = setInterval(function() {
    var ballVerticalPosition = $("#ball").position().top;
    var ballHorizontalPosition = $("#ball").position().left;
    var paddleVerticalPosition = $("#paddle-user").position().top;
    var paddleHorizontalPosition = $("#paddle-user").position().left;
    switch (that.direction) {
      case 1:
        // console.log(paddleVerticalPosition, paddleHorizontalPosition, ballVerticalPosition, ballHorizontalPosition);
        // if ((paddleVerticalPosition < ballVerticalPosition) && (ballVerticalPosition < paddleVerticalPosition + 50) && (ballHorizontalPosition < paddleHorizontalPosition) && (ballHorizontalPosition > paddleHorizontalPosition - 10)) {
        //   that.direction = 4;
        // }
        if (ballVerticalPosition > 2 && ballHorizontalPosition < 898) {
          $("#ball").css({
            top: ballVerticalPosition -= ballSpeed,
            left: ballHorizontalPosition += ballSpeed
          });
        } else if (ballHorizontalPosition > 898) {
          that.direction = 4;
        } else {
          that.direction = 2;
        }
        break;
      case 2:
        if (ballVerticalPosition < 400 && ballHorizontalPosition < 898) {
          $("#ball").css({
            top: ballVerticalPosition += ballSpeed,
            left: ballHorizontalPosition += ballSpeed
          });
        } else if (ballHorizontalPosition > 898) {
          that.direction = 3;
        } else {
          that.direction = 1;
        }
        break;
      case 3:
        if (ballVerticalPosition < 400 && ballHorizontalPosition > 2) {
          $("#ball").css({
            top: ballVerticalPosition += ballSpeed,
            left: ballHorizontalPosition -= ballSpeed
          });
        } else if (ballHorizontalPosition < 2) {

          that.direction = 1;
        } else {
          that.direction = 4;
        }
        break;

      case 4:
        if (ballVerticalPosition > 2 && ballHorizontalPosition > 2) {
          $("#ball").css({
            top: ballVerticalPosition -= ballSpeed,
            left: ballHorizontalPosition -= ballSpeed
          });

        } else if (ballHorizontalPosition < 2) {

          that.direction = 1;
        } else {
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
