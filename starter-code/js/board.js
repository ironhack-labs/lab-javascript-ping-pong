function Board() {

  // board has a height and width
  this.height = parseInt($('#board').css('height'));
  this.width = parseInt($('#board').css('width'));

  // initiate ball and paddles
  // var ball = new Ball(0,0);
  this.ball = new Ball;
  this.playerPaddle = new Paddle(1/5, 'player');
  this.computerPaddle = new Paddle(1/5, 'comp');

  // initiate scores
  this.playerScore = 0;
  this.computerScore = 0;
  this.targetScore = 2;

  // board has status
  this.keepGoing = true;
  this.keepChecking = true;

  //toggle Game Over
  $('#game-over').toggle();

}

////////////////////////// Launches a rally and calls all functions until next score
Board.prototype.start = function(){

    this.ball.reset();
    $('#ball').show();
    this.keepGoing = true; this.keepChecking = true;
    var that = this;

    var intervalId = setInterval( function () {
      that.ball.move(); //move ball in its current direction
      if (that.keepChecking) that.checkGame(); //check for obstacles
      if (!that.keepGoing) {
        clearInterval(intervalId); //kill when keepGoing is done
        that.restart();
      }

    }, 10);

};

////////////////////////// Continually checks for events, i.e. ball hitting an obstacle or a score
Board.prototype.checkGame = function(){

    //check for obstacles and change direction if necessary

    //check for wall obstacle
    if (this.ball.position.y >= 0 && this.ball.direction.y > 0)   { //top wall
      this.ball.hitObstacle('wall');
    } else if (this.ball.position.y - this.ball.diameter <= -this.height && this.ball.direction.y < 0 ) { //bottom wall
      this.ball.hitObstacle('wall');
    }

    //check for paddle obstacle or crossing the line

    //check if ball reaches left side (computer)
    if (this.ball.position.x <= 0 && this.ball.direction.x < 0)   {

      //if ball is within vertical bounds of paddle, trigger a hit obstacle event
      if ( this.ball.position.y - 1.2 * this.ball.diameter < this.computerPaddle.y && this.ball.position.y + 0.2 * this.ball.diameter > this.computerPaddle.y - this.computerPaddle.height ) {
        this.ball.hitObstacle('paddle');
      }

      // otherwise it counts as a score for player
      else {
        this.computerScore += 1; this.renderScore(); // give a point to computer
        this.keepChecking = false; // stop checking
        var that = this;
        setTimeout( function(){
          that.keepGoing = false;
          that.ball.reset();
        }, 500);
      }
    }


    //check if ball reaches right side (player)
    else if (this.ball.position.x + this.ball.diameter >= this.width && this.ball.direction.x > 0 ) {

      //if ball is within vertical bounds of paddle, trigger a hit obstacle event
      if ( this.ball.position.y - 1.2 * this.ball.diameter < this.playerPaddle.y && this.ball.position.y + 0.2 * this.ball.diameter > this.playerPaddle.y - this.playerPaddle.height ) {
        this.ball.hitObstacle('paddle');
      }

      // otherwise it counts as a score for computer
      else {
        this.computerScore += 1; this.renderScore(); // give a point to computer
        this.keepChecking = false; // stop checking
        var that = this;
        setTimeout( function(){
          that.keepGoing = false;
          that.ball.reset();
        }, 500);
      }
    }

};


Board.prototype.renderScore = function(){
  $('#comp-score').html(this.computerScore);
  $('#player-score').html(this.playerScore);
};




Board.prototype.restart = function() {
  if ( Math.max(this.computerScore, this.playerScore) < this.targetScore ) {
    var that = this;
    that.start();
  } else {
    this.gameOver();
  }
};


Board.prototype.gameOver = function(){
    $('#ball').toggle();
    $('#game-over').toggle();
    $('#start-button').toggle();
    $('#start-button').html('PLAY AGAIN');
};

Board.prototype.resetScore = function () {
  this.computerScore = 0;
  this.playerScore = 0;
  this.renderScore();
};
