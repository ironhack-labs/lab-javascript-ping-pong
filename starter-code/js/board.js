
function Board() {
  this.paddle1 = new Paddle(10, 300);
  this.paddle2 = new Paddle(1400, 300);
  this.ball = new Ball(698.5, 0, 5, this.paddle1, this.paddle2);
  this.width = 1410;
  this.player1Score = 0;
  this.player2Score = 0;
  this.ballMoving = 0;
  this.assignControlsToKeys();
}

Board.prototype.start = function(){
  this.ballMoving = setInterval(this.ball.move.bind(this), 100);)
  /*var check = this.checkGame();
  if (!check){
    this.stop();
  }*/
};

Board.prototype.checkGame = function(){

  if (this.ball.x <= 0){
    this.player2Score += 15;
    this.stop();
  } else if (this.ball.x >= (this.width - 25)){
    this.player1Score += 15;
    this.stop();
  }
;

Board.prototype.stop = function(){
  console.log("Game stopped");
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
  this.ballMoving = setInterval(this.ball.move.bind(this), 100);)
};

Board.prototype.gameOver = function(player){
  var winner
  if(this.player1Score == 60 || This.player2Score == 60){
      if (this.player1Score > this.player2Score){
        winner = "Player 1.";
      }else if (this.player1Score < this.player2Score){
        winner = "Player 2.";
      }else {
        winner = "both players."
      }
      alert("Game Over. The winnner is/are: " + winner);
      return true;
    }
    return false;
};

Board.prototype.assignControlsToKeys = function(){
  $('body').on('keydown', function(e) {
    switch (e.keyCode) {
      case 38: // arrow up
        this.paddle1.y -= 5;
        break;
      case 40: // arrow down
        this.paddle1.y += 5;
        break;
      }
    }.bind(this));
  };
