function Board() {
  this.paddle1 = new Paddle(20,  250);
  this.paddle2 = new Paddle(960, 250);
  this.ball    = new Ball(495,250, this.paddle1, this.paddle2);
  this.gameStatus = false;
}

Board.prototype.start = function(){
  var self = this;
  if (this.paddle1.score >= 7 || this.paddle2.score >= 7) {
    this.gameOver();
  } else {
    this.gameStatus = setInterval(function(){
      self.checkGame();
    }, intervalTime);
  }
};

Board.prototype.checkGame = function(){
  if ( this.ball.pointScored() ) {
    this.restart();
  } else {
    this.ball.move();
  }
};

Board.prototype.stop = function(){
  clearInterval(this.gameStatus);
};

Board.prototype.restart = function(){
  this.stop();
  this.paddle1.restart();
  this.paddle2.restart();
  this.ball.restart();
  this.start();
};

Board.prototype.gameOver = function(){
  this.stop();
  document.getElementById("winner").toggleClass("hide");
};

Board.prototype.movePaddle = function(){

};
