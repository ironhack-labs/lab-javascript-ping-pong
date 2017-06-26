function Game() {
  this.board = new Board();
  this.BoardConstructor = Board;
  this.assignControlsToKeys();
};



Game.prototype.start = function() {
  if (!this.intervalId){
    this.intervalId = setInterval(this.updateState.bind(this), 100);
  }
};


Game.prototype.updateState = function() {
  this.board.ball.move();

  if (this.board.checkGame()){
    if (this.ballMoving){
      clearInterval(this.ballMoving);
      this.intervalId = undefined;
      }
      var checkGameOver = this.board.gameOver()
      if (this.board.gameOver() !== "not finished"){
        alert(checkGameOver);
      } else {
        this.board.ball.restart();
        this.intervalId = setInterval(this.updateState.bind(this), 100);
      }
    }

  this.board.paddle2.followBall(this.board.ball.y);
  this.renderGame();
};


Game.prototype.assignControlsToKeys = function(){
  $(document).on('keydown', function(e) {
    var y = $('.paddle1').position().top;
    switch (e.keyCode) {
      case 38: // arrow up
        if (y > 5){
        $('.paddle1').css({top: y-=15});
        }
        break;
      case 40: // arrow down
      if (y < 675){
      $('.paddle1').css({top: y+=15});
      }
      break;
    }
  });
};

/*
$('body').on('keydown', function(e) {
  switch (e.keyCode) {

    case 38: // arrow up
      this.paddle1.y -= 5;
      break;

    case 40: // arrow down
      this.paddle1.y += 5;
      break;
    }
  }.bind(this));*/



Game.prototype.activatePaddle2 = function(){
  this.board.paddle2.followBall(this.board.ball.y);
}

Game.prototype.renderGame = function(){
  this.renderBall();
  this.renderPaddle();
  this.renderScore();
}


Game.prototype.renderBall = function(){
  $(".ball").css({
    top: this.board.ball.y,
    left: this.board.ball.x
  });
}


Game.prototype.renderPaddle = function(){
  //$(".paddle1").css({
    //top: this.board.paddle1.y,
    //left: this.board.paddle1.x
  //});

  $(".paddle2").css({
    top: this.board.paddle2.y,
    left: this.board.paddle2.x
  });
}

Game.prototype.renderScore = function(){
  $(".score1").html(this.board.player1Score);
  $(".score2").html(this.board.player2Score);
}






$(document).ready(function() {

  $('.start').on('click', function(){
  var game = new Game();
  game.start();
});
});
