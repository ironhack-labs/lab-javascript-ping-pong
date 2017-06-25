function Ball(direction, ballSpeed) {
  this.direction = direction;
  this.ballSpeed = ballSpeed;
}

Ball.prototype.randomDirection = function() {};

Ball.prototype.move = function(direction, ballSpeed) {
  this.direction = direction;
  this.ballSpeed = ballSpeed;

  var that = this,
    yPosition = $('#ball').position().top,
    xPosition = $('#ball').position().left,
    yPaddle = $('#paddle1').position().top,
    xPaddle = $('#paddle1').position().left,
    paddle2 = $('#paddle2').position().top;

  var intervalId = setInterval(function() {
    switch (that.direction) {
      case 1:
        if (yPosition > 2 && xPosition < 860) {
          $('#ball').css({
            top: yPosition -= that.ballSpeed,
            left: xPosition += that.ballSpeed
          });
        } else if (xPosition > 850) {
          if(yPosition > 550){
            $('#paddle2').css({top: yPosition});
          }
          that.direction = 4;
        } else {
          that.direction = 2;
        }
        break;
      case 2:
        if (yPosition < 650 && xPosition < 860) {          $('#ball').css({
            top: yPosition += that.ballSpeed,
            left: xPosition += that.ballSpeed
          });
          if(yPosition < 550){
            $('#paddle2').css({top: yPosition});
          }
        } else if (xPosition > 860) {
          if(yPosition < 550){
            $('#paddle2').css({top: yPosition});
          }
          that.direction = 3;
        } else {
          if(yPosition < 550){
            $('#paddle2').css({top: yPosition});
          }
          that.direction = 1;
        }
        break;
      case 3:
        if (yPosition < 650 && xPosition > 2) {
          console.log(xPosition,yPosition);
          $('#ball').css({
            top: yPosition += that.ballSpeed,
            left: xPosition -= that.ballSpeed
          });
        } else if (xPosition < 2) {
          that.direction = 2;
        } else if(yPosition > 640){
          that.direction = 4;
        }
        break;
      case 4:
        if (yPosition > 2 && xPosition > 2) {
          console.log(xPosition,yPosition);
          $('#ball').css({
            top: yPosition -= that.ballSpeed,
            left: xPosition -= that.ballSpeed
          });
        } else if (xPosition < 2) {
          that.direction = 1;
        } else if(yPosition < 2){
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
