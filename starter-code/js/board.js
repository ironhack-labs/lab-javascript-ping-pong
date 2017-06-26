
function Board() {
  this.paddle1 = new Paddle(10, 300);
  this.paddle2 = new Paddle(1400, 300);
  this.ball = new Ball(698.5, 0, 30, this.paddle1, this.paddle2);
  this.width = 1410;
  this.player1Score = 0;
  this.player2Score = 0;
  this.ballMoving = 0;
  this.assignControlsToKeys();
}

Board.prototype.start = function(){
  this.ballMoving = setInterval(this.ball1.move(), 100);
  /*var check = this.checkGame();
  if (!check){
    this.stop();
  }*/
};

Board.prototype.checkGame = function(){

  if (this.ball.x <= 0){
    this.player2Score += 15;
    return true;
  } else if (this.ball.x >= (this.width - 25)){
    this.player1Score += 15;
    return true;
  };
  return false;
}

Board.prototype.stop = function(){
  if (this.ballMoving){
    clearInterval(this.ballMoving);
    this.ballMoving = undefined;
  }
  if (!this.gameOver) {this.restart()};
}


Board.prototype.restart = function(){
  this.paddle1.restart()
  this.paddle2.restart()
  this.ball.restart()
  this.ballMoving = setInterval(this.ball1.move.bind(this), 100);
};

Board.prototype.gameOver = function(){
  var winner
  if(this.player1Score == 60 || this.player2Score == 60){
      if (this.player1Score > this.player2Score){
        winner = "Player 1.";
      }else if (this.player1Score < this.player2Score){
        winner = "Player 2.";
      }else {
        winner = "both players."
      }
      return winner
    }
   return "not finished"
};

Board.prototype.assignControlsToKeys = function(){


  };
