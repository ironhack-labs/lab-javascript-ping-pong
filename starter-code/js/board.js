function Board() {
  this.paddle1 = new Paddle(160, 20)
  this.paddle2 = new Paddle(160, 570)
  this.ball = new Ball(190, 290, this.paddle1, this.paddle2)
}

Board.prototype.start = function(){
  this.paddle1.restart(160, 20)
  this.paddle2.restart(160, 570)
  this.ball.restart(190, 290, this.paddle1, this.paddle2)
}

Board.prototype.checkGame = function(){
}

Board.prototype.stop = function(){
}

Board.prototype.restart = function(){
}

Board.prototype.gameOver = function(){
}
