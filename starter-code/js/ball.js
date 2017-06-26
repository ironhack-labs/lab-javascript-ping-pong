function Ball(x, y, speed, paddle1, paddle2) {
  this.x = x;
  this.y = y;
  this.randomDirection();
  this.speed = speed;
  this.paddle1 = paddle1;
  this.paddle2 = paddle2;
}

Ball.prototype.randomDirection = function() {
  this.directionX = Math.random() * 2  - 1;
  this.directionY = Math.random() * 2  - 1;
};

Ball.prototype.move = function(){
  this.x += (this.directionX * this.speed);
  this.y += (this.directionY * this.speed);
  if (this.y <=0 || this.y >= 685){
    this.y = -this.y;
  }
  if ((this.x <= 40) && (Math.abs(this.y - this.paddle1.y)) ||
      (this.x >= 1345) && (Math.abs(this.y - this.paddle2.y))) {
    this.x = -this.x; //paddle.hitBall (se implementa aquí, por claridad)
  }
};

Ball.prototype.pointScored = function(){
  return (this.x < 20)? "Player1" : "Player2";
};

// returns winner paddle or false
Ball.prototype.winner = function(){
  return (this.position.x < 20)? "Player1" : "Player2";
};

Ball.prototype.restart = function(){
  this.x = 50;
  this.y = 0;
  this.randomDirection();
};
