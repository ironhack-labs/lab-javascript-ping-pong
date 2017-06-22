function Ball(x,y, paddle1, paddle2) {
  this.x = x;
  this.y = y;
  this.dir = 1;
  this.paddle1 = paddle1;
  this.paddle2 = paddle2;
}

Ball.prototype.randomDirection = function() {
};

Ball.prototype.move = function(){
};

Ball.prototype.pointScored = function(){
};

// returns winner paddle or false
Ball.prototype.winner = function(){
};

Ball.prototype.restart = function(){
};
