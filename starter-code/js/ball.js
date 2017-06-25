function Ball(x,y, paddle1, paddle2) {
  this.x = x;
  this.y = y;
  this.paddle1 = paddle1;
  this.paddle2 = paddle2;
  this.direction = 0;
  this.speed = 3;
}

Ball.prototype.randomDirection = function() {
  var x = this.x;
  var y = this.y;
  x = Math.floor((Math.random()* 1296));
  y = Math.floor((Math.random()* 700));
  return x , y;
};

Ball.prototype.move = function(){
  var that = this;
  var ballTop = $(".ball").position().top;
  var ballLeft = $(".ball").position().left;
  var paddleTop = $("#paddle-user").position().top;
  var paddleLeft = $("#paddle-comp").position().left;
  var interval = setInterval(function(){
    switch (that.direction) {
      case 1:
      $(".ball").css({
        top: ballTop -= that.speed,
        left: ballLeft += that.speed,
        });
        if (ballTop <= 1) {
          that.direction = 3;
        } else if (ballLeft <= 1292) {
          that.direction = 2;
        }
      break;

      case 2:
      $(".ball").css({
        top: ballTop += that.speed,
        left: ballLeft -= that.speed,
        });
        if (ballTop >= 695) {
          that.direction = 4;
        } else if (ballLeft <= 1) {
          that.direction = 3;
        }
        break;
      case 3:
      $(".ball").css({
        top: ballTop += that.speed,
        left: ballLeft += that.speed,
        });
        if (ballTop >= 695) {
          that.direction = 1;
        } else if (ballLeft >= 1292) {
          that.direction = 2;
        }
        break;

      case 4:
      $(".ball").css({
        top: ballTop -= that.speed,
        left: ballLeft += that.speed,
        });
        if (ballTop <= 1) {
          that.direction = 2;
        } else if (ballLeft <= 1) {
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
