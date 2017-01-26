function Board() {
  this.paddle1 = new Paddle(0, 200);
  this.paddle2 = new Paddle(880, 200);
  this.homeScore = 0;
  this.awayScore = 0;
}

//set score to 0-0, put everyone in initial places,
//assign speed functions
Board.prototype.start = function(){

};

Board.prototype.checkGame = function(){
};

//stop
Board.prototype.stop = function(){
};

//places people!
Board.prototype.restart = function(){
};

Board.prototype.gameOver = function(){
};
