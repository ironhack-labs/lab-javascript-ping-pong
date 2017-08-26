function Board() {
  this.userPaddle = "paddle1";
  this.computerPaddle = "paddle2";
  this.ball = "ball";
}

Board.prototype.start = function(){
  var newGame = new Board();
};

Board.prototype.checkGame = function(){

};

Board.prototype.stop = function(){
};

Board.prototype.restart = function(){

};

Board.prototype.gameOver = function(){
};
