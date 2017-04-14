function Paddle(x,y) {
  this.x= x;
  this.y = y;
  this.original_x = x;
  this.original_y = y;
  this.score = 0;
}
Paddle.prototype.restart = function(){
  this.x = original_x;
  this.y = original_y;
};

Paddle.prototype.moveUp = function(){
  return this.y-=10;
};

Paddle.prototype.moveDown = function(){
  return this.y+=10;
};

Paddle.prototype.hitBall = function(ball_y, paddle_y, sumX){
  if((sumX===10)&&(ball_y>=paddle_y)&&(ball_y<=paddle_y+60))   sumX=-10;
  else if ((sumX===-10)&&(ball_y>=paddle_y)&&(ball_y<=paddle_y+60))  sumX=10;
  return sumX;
};
