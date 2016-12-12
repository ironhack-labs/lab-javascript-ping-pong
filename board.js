function Board() {
  this.paddle1 = new Paddle(0,    300);
  this.paddle2 = new Paddle(1000, 300);
  this.ball    = new Ball(500,300, paddle1, paddle2);
}

Board.prototype.start = function(){
  if (this.paddle1.score >= 7 || this.paddle2.score >= 7) {
    this.gameOver();
  } else {
    this.checkGameInterval = setInterval(function(){
      this.checkGame()
    }, 100);
  }
}

Board.prototype.checkGame = function(){
  if ( this.ball.pointScored() ) {
    this.restart();
  } else {
    this.ball.move();
  }
}
Board.prototype.stop = function(){
  clearInterval(this.checkGameInterval);
}
Board.prototype.restart = function(){
  this.stop();
  this.paddle1.restart();
  this.paddle2.restart();
  this.ball.restart();
  this.start();
}

Board.prototype.gameOver = function(){
  this.stop();
  console.log("the winner is...");
};

Board.prototype.movePaddle = function(){

};
