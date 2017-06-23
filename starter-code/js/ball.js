function Ball(x,y, paddle1, paddle2) {
  this.pointX = x;
  this.pointY = y;
  this.directionX = "left";
  this.directionY = "top";
  this.paddel1 = paddle1;
  this.paddle2 = paddle2;
}

Ball.prototype.randomDirection = function() {

};

Ball.prototype.move = function(){
  var velocity = 2;
  console.log(this.pointX, this.pointY);
  if (this.directionX === "left") { this.pointX = this.pointX - velocity ; }

  else { this.pointX = this.pointX + velocity; }

  if (this.directionY === "top") { this.pointY = this.pointY + velocity; }
  else { this.pointY = this.pointY - velocity; }

  if (this.pointX === 0)   { this.directionX = "right"; }
  if (this.pointX === 800) { this.directionX = "left"; }
  if (this.pointY === 520) { this.directionY = "bottom"; }
  if (this.pointY === 0)   { this.directionY = "top"; }

  $("#ball").css({left: this.pointX, top: this.pointY});
};

Ball.prototype.pointScored = function(){
};

// returns winner paddle or false
Ball.prototype.winner = function(){
};

Ball.prototype.restart = function(){
};
