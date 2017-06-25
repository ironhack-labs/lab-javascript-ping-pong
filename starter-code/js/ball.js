function Ball(x,y, paddle1, paddle2) {
  this.posx = x;
  this.posy = y;
  this.directionX = 'left';
  this.directionY = 'top';
  this.paddle1 = paddle1;
  this.paddle2 = paddle2;
  this.direction = 0;
}

Ball.prototype.randomDirection = function() {
};

Ball.prototype.move = function(direction){
  var verticalPosition = $('.ball').position().top;
  var horizontalPosition = $('.ball').position().left;
  var paddleVertical = $('.paddle-red').position().top;
  var paddleHorizontal = $('.paddle-blue').position().left;
  var that = this;
  var intervalId = setInterval(function(){
    switch (that.direction) {
      case 0:
      if(verticalPosition > 2  && horizontalPosition < 850){
        $('.ball').css({left:horizontalPosition+=10, top:verticalPosition -=10});
        console.log(verticalPosition, horizontalPosition);
      }
      else if(horizontalPosition > 850) {
        if (verticalPosition > 370) {
          $('.paddle-blue').css({top: verticalPosition});
        }
        that.direction = 3;
      }
      else {
        that.direction = 1;
      }
      break;

      case 1:
      if (verticalPosition < 420 && horizontalPosition < 850) {
        $('.ball').css({left:horizontalPosition+=10, top:verticalPosition +=10});
        console.log(verticalPosition, horizontalPosition);

      if (verticalPosition < 370) {
        $('.paddle-blue').css({top: verticalPosition});
      }
    }

      else if(horizontalPosition > 850) {
        if (verticalPosition < 370) {
          $('.paddle-blue').css({top: verticalPosition});
        }
        that.direction = 2;
      }
      else {
        that.direction = 0;
      }
      break;

      case 2:
      if (verticalPosition < 420 && horizontalPosition > 2) {
        $('.ball').css({left:horizontalPosition-=10, top:verticalPosition +=10});
      }
      else if(horizontalPosition < 2) {
        that.direction = 1;
      }
      else {
        that.direction = 3;
      }
      break;

      case 3:
      if (verticalPosition > 1 && horizontalPosition > 1) {
        $('.ball').css({left:horizontalPosition-=10, top:verticalPosition -=10});
      }
      else if(horizontalPosition < 1) {
        that.direction = 0;
      }
      else {
        that.direction = 2;
      }
      break;
    }
  }, 30);
};

Ball.prototype.pointScored = function(){
};

// returns winner paddle or false
Ball.prototype.winner = function(){
};

Ball.prototype.restart = function(){
};
