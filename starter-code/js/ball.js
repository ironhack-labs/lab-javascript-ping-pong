function Ball(x,y, paddle1, paddle2) {
  this.posX = x;
  this.posY = y;
  this.paddle1 = paddle1;
  this.paddle2 = paddle2;
  this.xChange = 0;
  this.yChange = 0;
}

//must obviously go in opposite direction of hit, choose random x, gives our y.
Ball.prototype.randomDirection = function() {
};

// change ball positions
// use x^2 + y^2 = c^2, choose a c (speed) at start of game. Then random x (max is c). This gives our y.
Ball.prototype.move = function(){
};

Ball.prototype.pointScored = function(){
};

// returns winner paddle or false
Ball.prototype.winner = function(){
};

Ball.prototype.restart = function(){
};
