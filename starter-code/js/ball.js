function Ball(x, y, paddle1, paddle2) {
    this.xPos = x;
    this.yPos = y;
    this.paddle1 = paddle1;
    this.paddle2 = paddle2;
    this.xChange = 0;
    this.yChange = 0;
    this.scoringPaddle = null;
}

//must obviously go in opposite direction of hit, choose random x, gives our y.
Ball.prototype.randomDirection = function() {

    var c = 12;       //ball speed, pretty much. pixels moved per intervalTime
    var negOrPos = Math.random() >= 0.5 ? 1 : -1;
    // should return number between -2 and 2, inclusive
    this.xChange = Math.round( Math.random() * c) * negOrPos;
    negOrPos = Math.random() >= 0.5 ? 1 : -1;
    // should return number based on hypotenuse.
    this.yChange = Math.round( Math.sqrt((Math.pow(c, 2) - Math.pow(this.xChange, 2)) ) * negOrPos);

    while (this.xChange === 0 || this.yChange === 0){
      negOrPos = Math.random() >= 0.5 ? 1 : -1;
      // should return number between -2 and 2, inclusive
      this.xChange = Math.round( Math.random() * c) * negOrPos;
      negOrPos = Math.random() >= 0.5 ? 1 : -1;
      // should return number based on hypotenuse.
      this.yChange = Math.round( Math.sqrt((Math.pow(c, 2) - Math.pow(this.xChange, 2)) ) * negOrPos);
    }

    //console.log("xchange" + this.xChange);
    //console.log("ychange" + this.yChange);
};

Ball.prototype.move = function() {
    this.xPos += this.xChange;
    this.yPos += this.yChange;

    //console.log("before check. ball.yPos = ");
    //see if it hits anything.
    // check if it hit top or bottom wall.
    if (this.yPos <= 0 || this.yPos >= BOARD_HEIGHT - BALL_DIAMETER) {
        this.yChange *= -1;
    }

    // check if it hit paddle by calling paddle.hitBall();
    if (this.paddle1.hitBall(this) || this.paddle2.hitBall(this)) {
        //also randomize the y, but still must opposite the x
        var oldXchangeNeg = (this.xChange < 0) ? true : false;
        this.randomDirection();
        var newXchangeNeg = (this.xChange < 0) ? true : false;
        this.xChange = (oldXchangeNeg === newXchangeNeg) ?
          this.xChange * -1 : this.xChange;
    }
};

Ball.prototype.pointScored = function() {
    //check if someone scored
    if (this.xPos <= 0) {
        //paddle2 scored
        this.scoringPaddle = this.paddle2;
        return true;
    } else if (this.xPos >= BOARD_WIDTH - BALL_DIAMETER) {
        //paddle1 scored
        this.scoringPaddle = this.paddle1;
        return true;
    }
    return false;
};

// returns winner paddle or false
Ball.prototype.winner = function() {
    return (this.scoringPaddle) ? this.scoringPaddle : false;
};

Ball.prototype.restart = function() {
    this.xPos = 440;
    this.yPos = 230;
    this.scoringPaddle = null;
    this.randomDirection();
};
