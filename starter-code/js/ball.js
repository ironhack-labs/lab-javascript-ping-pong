function Ball(x,y, paddle1, paddle2) {
  this.positionX = x;
  this.positionY = y;
  this.directionX = "left";
  this.directionY = "up";
  this.paddle1 = paddle1;
  this.paddle2 = paddle2;
  this.speed = 5;
  this.direction = 1;
}

Ball.prototype.randomDirection = function() {
  return Math.floor(Math.random());
};

Ball.prototype.move = function() {
  var x = $("#ball").position().left;
  var y = $("#ball").position().top;
  var that = this;
  var paddleTop = $("#paddle1").position().top;
  var paddleLeft = $("#paddle1").position().left;
  var intervalId = setInterval(function() {
    switch (that.direction) {
      case 1:
        $("#ball").css({
          top: y -= that.speed,
          left: x += that.speed,
        });
        if (y < 1) {
          that.direction = 2;
        }
        
        else if (x > 900) {
          that.direction = 4;
        }
        break;
      case 2:
        $("#ball").css({
          top: y += that.speed,
          left: x += that.speed,
        });
        if (x > 900) {
          that.direction = 3;
        }
        else if (y > 390) {
          that.direction = 1;
        }
        break;
      case 3:
        $("#ball").css({
          top: y += that.speed,
          left: x -= that.speed,
        });
        if (y > 390) {
          that.direction = 4;
        } else if (x < 1) {
          that.direction = 2;
        }
        break;
      case 4:
        $("#ball").css({
          top: y -= that.speed,
          left: x -= that.speed,
        });
        if (y < 1) {
          that.direction = 3;
        } else if (x < 1) {
          that.direction = 1;
        }
        break;
    }
  }, 20);
};


Ball.prototype.pointScored = function(){
};

// returns winner paddle or false
Ball.prototype.winner = function(){
};

Ball.prototype.restart = function(){
};
