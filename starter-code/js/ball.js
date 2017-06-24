function Ball(x,y, paddle1, paddle2) {
this.x = x;
this.y = y;
this.direction = 1;
this.speed = 10;
}

Ball.prototype.randomDirection = function() {
};

Ball.prototype.move = function(){
  var y = $("#ball").position().left;
  var x = $("#ball").position().top;
  var that = this;
  var paddleTop = $("paddle1").position.top;
  var paddleLeft = $("paddle1").position.left;
  var intervalId = setInterval(function() {
    switch (that.direction) {
      case 1:
        $("#ball").css({
          top: y -= that.speed,
          left: x += that.speed,
        });
        if (y < 1) {
          that.direction = 2;
        }else if (y >= paddleLeft-20){
          if ((y > paddleTop) && (y < paddleTop + 70)) {
            that.direction = 4;
          }
        } else if (x > 850) {
          that.direction = 4;
        }
        break;
      case 2:
        $("#ball").css({
          top: y += that.speed,
          left: x += that.speed,
        });
        if (x > 880) {
          that.direction = 3;
        } else if (y > 580) {
          that.direction = 1;
        }
        break;
      case 3:
        $("#ball").css({
          top: y += that.speed,
          left: x -= that.speed,
        });
        if (y > 580) {
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
      default:
    }
  }, 20);


};


Ball.prototype.pointScored = function(){
};

Ball.prototype.winner = function(){
};

Ball.prototype.restart = function(){
};
