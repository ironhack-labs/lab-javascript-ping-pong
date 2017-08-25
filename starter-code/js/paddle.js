function Paddle(x, y, id) {
  this.x = x
  this.y = y
  this.score = 0
  this.id = id
}

Paddle.prototype.restart = function(x, y, score, id){
  this.x = x
  this.y = y
  this.score = score
  this.id = id
}

Paddle.prototype.hitBall = function(ball_y){

}

Paddle.prototype.moveDown = function(paddle1Top){
  board.paddle1.x = paddle1Top + 5
}

Paddle.prototype.moveUp = function(paddle1Top){
  board.paddle1.x = paddle1Top - 5
}
