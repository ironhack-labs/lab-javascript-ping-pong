function Paddle(height, type) {

  // paddle has initial position to be stored -- all positions relative 0 - 100


  // switch(type) {
  //   case 'comp' : this.initPosition {  }
  //     break;
  //   case 'user' :
  //     break;
  // }

  this.boardHeight = parseInt($('#board').css('height')); // initial
  this.height = height * this.boardHeight;
  this.y = - (1 - height) * this.boardHeight / 2


  // paddle has a height and step size
  // var height = 20 // 1/5th of the board height
  this.step = this.boardHeight / 20 ; // 1/20th of the board height for each step
  this.type = type; // type : 'player' or 'comp'

  if (this.type == 'comp') {
    this.pixFromLeft = 2 + parseInt($('#paddle-area-' + this.type).css('width')) - parseInt($('#paddle-' + this.type).css('width'));
    this.height = this.boardHeight; // computer is unbeatable
    this.y = 0;
  }

  this.render();

}

////////////////////////// Changes direction of the ball when hitting an obstacle
Paddle.prototype.move = function (dir) {

  // handle both up and down movements
  switch(dir) {

    case 'up':
      if (this.y < 0) {
        this.y += Math.min(this.step, - this.y); // paddle cannot go above top wall
      }
      break;

    case 'down':
      if (this.y - this.height > - this.boardHeight) {
        this.y -= Math.min(this.step, this.boardHeight + this.y + this.height); // paddle cannot go below bottom wall
      }
      break;
  }

  // render after each move
  this.render();

};

////////////////////////// Changes direction of the ball when hitting an obstacle
Paddle.prototype.render = function() {

  switch(this.type) {

  case ('player'):
    $('#paddle-' + this.type).css({
      transform: 'translate(0px, ' + (-this.y) + 'px',
      WebkitTransition: 'transform 0.1 ease-out 0',
      MozTransition: 'transform 0.1 ease-out 0',
      MsTransition: 'transform 0.1 ease-out 0',
      OTransition: 'transform 0.1 ease-out 0',
      transition: 'transform 0.1 ease-out 0'
    });
    break;

  case ('comp'):
    // var pixFromLeft = parseInt($('#paddle-area-' + this.type).css('width')) - parseInt($('#paddle-' + this.type).css('width'));
    $('#paddle-' + this.type).css({
      transform: 'translate(' + this.pixFromLeft + 'px, ' + (-this.y) + 'px'
    });
    break;
  }
}



Paddle.prototype.restart = function(){
  this.position = this.initPosition;
};

Paddle.prototype.hitBall = function(ball_y){
  // not sure what to do here
};
