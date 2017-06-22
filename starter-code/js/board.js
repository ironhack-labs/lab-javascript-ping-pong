function Board(paddle1,paddle2) {
  this.paddle1 = paddle1;
  this.paddle2 = paddle2;
  this.ball = false;
}

Board.prototype.start = function(){
    this.ball = false;
};

Board.prototype.checkGame = function(){
};

Board.prototype.stop = function(){
};

Board.prototype.restart = function(){
};

Board.prototype.gameOver = function(){
};
