function Ball(x,y, paddle1, paddle2) {
  this.position = {
    this.x = 50;
    this.y = 0;
  };
  this.direction = this.randomDirection();
  this.paddle1 = paddle1;
  this.paddle2 = paddle2;
}

Ball.prototype.randomDirection = function() {
  this.direction.x = Math.random()) * 2  - 1;
  this.direction.x = Math.random()) * 2  - 1;
};

Ball.prototype.move = function(){
  this.position.x += 3;
  this.position.y += 3;
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
