function Paddle(x,y) {
  this.positionX = x;
  this.positionY = y;
  this.size = 0;
  this.score = 0;
}
Paddle.prototype.restart = function(){
};

Paddle.prototype.hitBall = function(ball_y){
};
