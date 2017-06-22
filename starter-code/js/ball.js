function Ball(x, y, paddle1, paddle2) {
  this.direction = 1;
}

Ball.prototype.randomDirection = function() {};

Ball.prototype.move = function(direction) {
  this.direction = direction;
  var that = this,
    ballSpeed = 5,
    yPosition = $('#ball').position().top,
    xPosition = $('#ball').position().left,
    yPaddle = $('#paddle1').position().top,
    xPaddle = $('#paddle1').position().left;

  var intervalId = setInterval(function() {
    switch (that.direction) {
      case 1:
        if (yPosition > 2 && xPosition < 850) {
          console.log('case 1');
          $('#ball').css({
            top: yPosition -= ballSpeed,
            left: xPosition += ballSpeed
          });
        } else if (xPosition > 850) {
          that.direction = 4;
        } else {
          that.direction = 2;
        }
        break;
      case 2:
        if(yPosition < 650 && xPosition < 850){
          console.log('case 2');
          $('#ball').css({
            top: yPosition += ballSpeed,
            left: xPosition += ballSpeed
          });
        } else if (xPosition > 850) {
          that.direction = 3;
        } else {
          that.direction = 4;
        }
        break;
      case 3:
        if(yPosition < 650 && xPosition > 2){
          console.log('case 3');
          $('#ball').css({
            top: yPosition += ballSpeed,
            left: xPosition -= ballSpeed
          });
        } else if (xPosition < 2) {
          that.direction = 1;
        } else {
          that.direction = 4;
        }
        break;
      case 4:
        if(yPosition > 2 && xPosition > 2){
          console.log('case 4');
          $('#ball').css({
            top: yPosition -= ballSpeed,
            left: xPosition -= ballSpeed
          });
        } else if (xPosition < 2){
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
