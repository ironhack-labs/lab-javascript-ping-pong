function Board() {
  this.paddle1 = new Paddle(160, 20, 1)
  this.paddle2 = new Paddle(160, 570, 2)
  this.ball = new Ball(190, 290, this.paddle1, this.paddle2)
}

Board.prototype.start = function(){
  this.paddle1.restart(160, 20, 0, 1)
  this.paddle2.restart(160, 570, 0, 2)
  this.ball.restart(190, 290, this.paddle1, this.paddle2)
}

Board.prototype.checkGame = function(){
}

Board.prototype.stop = function(){
}

Board.prototype.restart = function(){
  this.paddle1.restart(160, 20, this.paddle1.score, 1)
  this.paddle2.restart(160, 570, this.paddle2.score, 2)
  this.ball.restart(190, 290, this.paddle1, this.paddle2)
}

Board.prototype.gameOver = function(){
}
