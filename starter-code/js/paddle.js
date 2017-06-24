function Paddle(x,y) {
  this.x = x;
  this.y = y;
}

Paddle.prototype.restart = function(){
  this.x = 310;
};

Paddle.prototype.hitBall = function(ball_y){
};
