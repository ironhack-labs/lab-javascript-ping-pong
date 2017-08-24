function Paddle(x,y) {
  this.x = x
  this.y = y
}

Paddle.prototype.restart = function(x,y){
  this.x = x
  this.y = y
}

Paddle.prototype.hitBall = function(ball_y){
  
}

Paddle.prototype.moveDown = function(paddle1Top){
  board.paddle1.x = paddle1Top + 5
}

Paddle.prototype.moveUp = function(paddle1Top){
  board.paddle1.x = paddle1Top - 5
}
