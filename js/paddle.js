function Paddle(x,y) {
  this.y = y;
  this.original_x = x;
  this.original_y = y;
  this.score = 0;
}
Paddle.prototype.restart = function(){
  this.x = this.original_x;
  this.y = this.original_y;
};

Paddle.prototype.hitBall = function(ball_y){
  var RANGE = 100;
  return (Math.abs(ball_y - this.y) < RANGE);
};
