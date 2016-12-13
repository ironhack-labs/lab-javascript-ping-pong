function Ball(x,y, paddle1, paddle2) {
  this.original_x = x;
  this.original_y = y;
  this.x = x;
  this.y = y;
  this.paddle1 = paddle1;
  this.paddle2 = paddle2;
  this.randomDirection();
}

Ball.prototype.randomDirection = function() {
  this.direction_x = (Math.random() > 0.5) ? -5 : 5;
  this.direction_y = (Math.floor(Math.random() * 6) + 1);
};

Ball.prototype.move = function(){
  // Up & Down rebound
  if (this.y <= 0 || this.y >= this.original_y*2) {
    this.direction_y *= -1;

    this.y += this.direction_y;
  } else
  // Left & Right Rebound
  console.log("this paddle 1 Y", this.paddle1);
  if ((this.x <= 20    && this.paddle1.hitBall(this.y)) ||
      (this.x >= 1000 && this.paddle2.hitBall(this.y))) {
    this.direction_x *= -1;
    this.x += this.direction_x;

  } else {
    // muevete mas
    this.x += this.direction_x;
    this.y += this.direction_y;
  }
};

Ball.prototype.pointScored = function(){
  if (this.winner()) {
    this.winner().score++;
    return true;
  } else {
    return false;
  }
};

// returns winner paddle or false
Ball.prototype.winner = function(){
  if (this.x <= 0 || this.x >= this.original_x * 2) {
    return (this.x <= 20 ? paddle1 : paddle2);
  } else {
    return false;
  }
};

Ball.prototype.restart = function(){
  this.x = this.original_x;
  this.y = this.original_y;
  this.randomDirection();
};
