function Ball(x,y, speed, paddle1, paddle2) {
  this.position = {
    this.x = x;
    this.y = y;
  };
  this.randomDirection();
  this.speed = speed;
  this.paddle1 = paddle1;
  this.paddle2 = paddle2;
}

Ball.prototype.randomDirection = function() {
  this.direction.x = Math.random()) * 2  - 1;
  this.direction.y = Math.random()) * 2  - 1;
};

Ball.prototype.move = function(){
  this.position.x += (this.direction.x * speed);
  this.position.y += (this.direction.y * speed);
  if (this.position.y <=0 || this.position.y >= 685){
    this.direction.y = -this.direction.y;
  }
  if ((this.position.x <= 40) && (Math.abs(this.position.y - paddle1.y)) ||
      (this.position.x >= 1345) && (Math.abs(this.position.y - paddle2.y))) {
    this.direction.x = -this.direction.x; //paddle.hitBall (se implementa aquí, por claridad)
  }
};

Ball.prototype.pointScored = function(){
  return (this.position.x < 20)? "Player1" : "Player2";
};

// returns winner paddle or false
Ball.prototype.winner = function(){
  return (this.position.x < 20)? "Player1" : "Player2";
};

Ball.prototype.restart = function(){
  this.position.x = 50;
  this.y = 0;
  this.direction = this.randomDirection();
};
