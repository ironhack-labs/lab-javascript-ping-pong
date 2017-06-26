function Ball(x, y, paddleComputer, paddleUser) {
  this.dir = 1;
  this.x = 0;
  this.y = 0;
}
Ball.prototype.randomDirection = function() {};

Ball.prototype.move = function() {
  this.x = $("#ball").position().top;
  this.y = $("#ball").position().left;
  var that = this;
  var intervalId = setInterval(function() {
    var userX = $("#paddle-user").position().top + 360;
    var userY = $("#paddle-user").position().left + 620;
    switch (that.dir) {
      case 0:
        if (that.x > 0 && that.y < 1400) {
          $("#ball").css({
            top: that.x -= 10,
            left: that.y += 10
          });
        }if((that.y == userY) && (that.x + 35 > userX) && (that.x < userX + 105)) {
          that.dir = 1;
        }if(that.y > userY + 35){
          clearInterval(intervalId);
          renderScore();
        }
        else if (that.x < 10) {
          that.dir = 1;
        } else if (that.y > 1390) {
          that.dir = 3;
        }
        break;
      case 1:
        if (that.y < 1400 && that.x < 700) {
          $("#ball").css({
            top: that.x += 10,
            left: that.y += 10
          });
        } if((that.y == userY) && (that.x + 35 > userX) && (that.x < userX + 105)) {
          that.dir = 2;
        }if(that.y > userY + 35){
          clearInterval(intervalId);
          renderScore();
        }
        else if (that.x > 690) {
          that.dir = 0;
        } else if (that.y > 1390) {
          that.dir = 2;
        }
        break;
      case 2:
        if (that.x < 700 && that.y > 0) {
          $("#ball").css({
            top: that.x += 10,
            left: that.y -= 10
          });
        } else if (that.x > 690) {
          that.dir = 3;
        } else if (that.y < 10) {
          that.dir = 1;
        }
        break;
      case 3:
        if (that.x > 0 && that.y > 0) {
          $("#ball").css({
            top: that.x -= 10,
            left: that.y -= 10
          });
        } else if (that.x < 10) {
          that.dir = 2;
        } else if (that.y < 10) {
          that.dir = 0;
        }
        break;
    }
  }, 30);
};




Ball.prototype.pointScored = function() {};

// returns winner paddle or false
Ball.prototype.winner = function() {};

Ball.prototype.restart = function() {
  $("#ball").css({
    top: this.x = 0,
    left: this.y = 720
  });
  this.dir = 1;
};
