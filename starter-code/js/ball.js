function Ball(x, y) {
    this.positionX = x;
    this.positionY = y;
    this.actualDirectionX = this._randomDirection();
    this.actualDirectionY = this._randomDirection();
}

Ball.prototype._randomDirection = function() {
    return Math.round(Math.random());
};

Ball.prototype.move = function() {

    this.positionX = parseInt($("#ball").css("left").replace('px', ''));
    var movement = 4;

    if (0 <= this.positionX && this.positionX <= 980) {
      //console.log('position:',this.positionX);
      //console.log('direction: ', this.actualDirectionX);

        switch (this.actualDirectionX) {
            case 0:
                this.positionX += movement;
                $("#ball").css("left", this.positionX + "px");
                if (this.positionX >= 980) this.actualDirectionX = 1;

                break;
            case 1:
                this.positionX -= movement;
                $("#ball").css("left", this.positionX + "px");
                if (this.positionX <= 0) this.actualDirectionX = 0;
                break;
        }
    }
    this.positionY = parseInt($("#ball").css("top").replace('px', ''));

    if (0 <= this.positionY && this.positionY <= 480) {
      //console.log('position:',this.positionY);
      //console.log('direction: ', this.actualDirectionY);
        switch (this.actualDirectionY) {
            case 0:
                this.positionY += movement;
                $("#ball").css("top", this.positionY + "px");
                if (this.positionY >= 480) this.actualDirectionY = 1;

                break;
            case 1:
                this.positionY -= movement;
                $("#ball").css("top", this.positionY + "px");
                if (this.positionY <= 0) this.actualDirectionY = 0;
                break;
        }
    }
};

Ball.prototype.collisions = function(){
  var ballY = parseInt($("#ball").css("top").replace('px', ''));
  var paddleY =   parseInt($("#paddle1").css("top").replace('px', ''));
  var computerY = parseInt($("#paddle2").css("top").replace('px', ''));
  var ballX = parseInt($("#ball").css("left").replace('px', ''));
  var paddleX =   parseInt($("#paddle1").css("left").replace('px', ''));
  var computerX = parseInt($("#paddle2").css("left").replace('px', ''));

  if (ballY <= paddleY+100 && ballY >=  paddleY-10) {
    if (ballX <= paddleX+50) {
      this.actualDirectionX = 0;
    }
  }
  if (ballY <= computerY+100 && ballY >= paddleY-10) {
    if (ballX >= computerX-10) {
      this.actualDirectionX = 1;
    }

  }
  // if (ballY <= computerY+100 && ballY >=  computerY-10) {
  //   if (ballX >= computerX) {
  //     this.actualDirectionX = 0;
  //   }
  // }
  console.log("computerX: "+computerX);
  console.log("ballX: "+ballX);

};


Ball.prototype.pointScored = function() {};

// returns winner paddle or false
Ball.prototype.winner = function() {};

Ball.prototype.restart = function() {};
