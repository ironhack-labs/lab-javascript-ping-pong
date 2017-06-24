function Paddle(x,y) {
  this.x = x;
  this.y = y;
}

Paddle.prototype.restart = function(){
  this.y = 300;
};

Paddle.prototype.hitBall = function(ball_x){
 ball_x = - ball_x;
 return ball_x;
};

Paddle.prototype.followBall = function(ball_y){
  if(ball_y < this.y){
    this.y --
  } else if (ball_y > this.y){
    this.y ++
  }
};


}
