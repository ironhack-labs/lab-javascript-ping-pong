function Board(userPaddle, compPaddle, ball) {
  this.userPaddle = userPaddle;
  this.compPaddle = compPaddle;
  this.ball = ball;
}

// Board.prototype.start = function(ball, sumX, sumY){
//   ball.move(sumX, sumY);
// };

Board.prototype.checkGame = function(){
};

Board.prototype.stop = function(){
};

Board.prototype.restart = function(){
};

Board.prototype.gameOver = function(){
};
