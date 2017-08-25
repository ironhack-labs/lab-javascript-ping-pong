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

Paddle.prototype.moveDown = function(paddleTop){
  this.x = paddleTop + 5
}

Paddle.prototype.moveUp = function(paddleTop){
  this.x = paddleTop - 5
}
