function Board() {
  this.paddle1 = new Paddle(0, 200);
  this.paddle2 = new Paddle(880, 200);
  this.ball = new Ball(440, 230, this.paddle1, this.paddle2);
  this.homeScore = 0;
  this.awayScore = 0;
}

//set score to 0-0, put everyone in initial places,
//assign speed functions
Board.prototype.start = function(){
  this.ball.randomDirection();
};

Board.prototype.checkGame = function(){
};

//stop
Board.prototype.stop = function(game){
  //probably should render atleast the score here as I'm not rendering anything
  //after we find game is over.
  clearInterval(game);
  alert("game is stopped");
};

//places people!
Board.prototype.restart = function(){
  this.ball.restart();
  this.paddle1.restart(0, 200);
  this.paddle2.restart(880, 200);
};

Board.prototype.gameOver = function(){
  return (this.homeScore === 7 || this.awayScore === 7);
};
