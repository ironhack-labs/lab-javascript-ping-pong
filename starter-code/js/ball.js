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
  if (this.directionX === "left") { this.pointX = this.pointX - 1; }
  else { this.pointX = this.pointX + 1; }

  if (this.directionY === "top") { this.pointY = this.pointY + 1; }
  else { this.pointY = this.pointY - 1; }

  if (this.pointX === 0)   { this.directionX = "right"; }
  if (this.pointX === 800) { this.directionX = "left"; }
  if (this.pointY === 520) { this.directionY = "bottom"; }
  if (this.pointY === 0)   { this.directionY = "top"; }

  $("#ball").css({left: this.pointX, top: this.pointY});
  setInterval(this.move.bind(this), 300);
};

Ball.prototype.pointScored = function(){
};

// returns winner paddle or false
Ball.prototype.winner = function(){
};

Ball.prototype.restart = function(){
};
