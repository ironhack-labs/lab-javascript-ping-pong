function Ball(x,y, paddle1, paddle2) {
  this.x = x;
  this.y = y;
  this.paddle1 = paddle1;
  this.paddle2 = paddle2;
}

Ball.prototype.randomDirection = function() {
  this.x = Math.floor(Math.random() * ((-10) - (10))) + 10;
  this.y = Math.floor(Math.random() * ((-10) - (10))) + 10;
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
