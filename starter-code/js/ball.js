function Ball() {

  // ball has a radius of 3/100th of board
  this.diameter = parseInt($('#ball').css('height'));

  // ball has a position (x,y) on the board
  this.position = { x : 0, y : 0 };

  // ball has a direction vector [x,y]
  this.direction = { x : 0, y : 0 };

  // set an step size for the movement of the ball, 1/100 of board
  this.step = 5; // in px

}


////////////////////////// Returns a random initial direction for the ball
Ball.prototype.randomDirection = function() {

  // pick an angle at random between +45 and -45 degrees anbd convert to pi format
  // start facing right (player)
  var initAngle = _.random(-50,-50) * Math.PI / 180;

  // return a length one vector representing the direction of the ball
  this.direction = { x: Math.cos(initAngle), y: Math.sin(initAngle) };

};

////////////////////////// Moves the ball one step
Ball.prototype.move = function() {

  //increments position by one step
  this.position.x += this.direction.x * this.step;
  this.position.y += this.direction.y * this.step;

  //render after every move
  this.render();

};

////////////////////////// Changes direction of the ball when hitting an obstacle
Ball.prototype.hitObstacle = function(obstacleType) {

  //Depending on nature of obstacle, change direction of ball
  switch(obstacleType) {
    case 'wall': this.direction.y = - this.direction.y // when hitting top or bottom wall, inverse y velocity
      break;

    case 'paddle': this.direction.x = -this.direction.x // when hitting paddle, inverse x velocity
      break;
  }

};


////////////////////////// Changes direction of the ball when hitting an obstacle
Ball.prototype.render = function() {
  $('#ball').css({
    transform: 'translate(' + this.position.x + 'px, ' + (-this.position.y) + 'px'
  })
}


////////////////////////// Resets ball to central position with random direction
Ball.prototype.reset = function(){
  this.position = { x: 0, y: 0};
  this.randomDirection();
  this.render();
};
