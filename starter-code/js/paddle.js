// I'm not sure what these params are for

function Paddle(x,y) {
  this.xPos = x;
  this.yPos = y;
}

//i invented this. weird because human should change only on key press.
Paddle.prototype.moveUp = function(){
  this.yPos = (this.yPos - 20 < 0) ? 0 : this.yPos - 20;
};

Paddle.prototype.moveDown = function(){
  this.yPos = (this.yPos + 20 > BOARD_HEIGHT - PADDLE_HEIGHT) ?
    BOARD_HEIGHT - PADDLE_HEIGHT : this.yPos + 20;
};

Paddle.prototype.restart = function(x, y){
  this.xPos = x;
  this.yPos = y;
};

// check if paddle hit ball
Paddle.prototype.hitBall = function(ball){
  if (this.xPos < 50){
    // we are paddle1
    if (ball.xPos - BALL_DIAMETER/2 <= this.posX + PADDLE_WIDTH/2){
      if (ball.yPos + BALL_DIAMETER/2 >= this.yPos - PADDLE_HEIGHT/2 ||
          ball.yPos - BALL_DIAMETER/2 <= this.yPos + PADDLE_HEIGHT/2){
        // we hit the paddle1
        return true;
      }
      return false;
    }
    return false;
  }
  else {
    //we are paddle2
    if (ball.xPos + BALL_DIAMETER/2 >= this.posX - PADDLE_WIDTH/2){
      if (ball.yPos + BALL_DIAMETER/2 >= this.yPos - PADDLE_HEIGHT/2 ||
          ball.yPos - BALL_DIAMETER/2 <= this.yPos + PADDLE_HEIGHT/2){
        // we hit the paddle1
        return true;
      }
      return false;
    }
    return false;
  }

  return false;
};
