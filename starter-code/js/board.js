function Board(ball, paddle1, paddle2) {
  this.ball = ball;
  this.paddle1 = paddle1;
  this.paddle2 = paddle2;
  this.name = name;

}

Board.prototype.start = function(){
};

Board.prototype.checkGame = function(){
};

Board.prototype.stop = function(){
};

Board.prototype.restart = function(){
};

Board.prototype.gameOver = function(){
};

Board.prototype.name = function(name){
  this.name = name;
};
