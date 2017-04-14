function Board(userPaddle, compPaddle, ball) {
  this.userPaddle = userPaddle;
  this.compPaddle = compPaddle;
  this.ball = ball;
  this.userScore = 0;
  this.compScore = 0;
}

// Board.prototype.start = function(ball, sumX, sumY){
//   ball.move(sumX, sumY);
// };

Board.prototype.checkGame = function(){
};

Board.prototype.stop = function(){
};

Board.prototype.restart = function(userPaddle, computerPaddle, ball){
  userPaddle.restart();
  setPosition("#paddle1", "left", userPaddle.x);
  setPosition("#paddle1", "top", userPaddle.y);
  computerPaddle.restart();
  setPosition("#paddle2", "left", computerPaddle.x);
  setPosition("#paddle2", "top", computerPaddle.y);
  ball.restart();
  setPosition("#ball", "left", ball.x);
  setPosition("#ball", "top", ball.y);

  function setPosition(id, where, pos){
    return $(id).css(where, pos);
  }
};



Board.prototype.gameOver = function(){
};
