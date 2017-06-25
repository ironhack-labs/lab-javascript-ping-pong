function Board() {
  this.paddle1 = new Paddle();
  this.ball = new Ball();
}

Board.prototype.start = function(direction, ballSpeed){
  board.ball.move(direction, ballSpeed);
};

Board.prototype.checkGame = function(){
};

Board.prototype.stop = function(){
};

Board.prototype.restart = function(){
};

Board.prototype.gameOver = function(){
};
