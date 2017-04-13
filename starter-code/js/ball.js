function Ball(x,y, paddle1, paddle2) {
  this.x = x;
  this.y = y;
  this.original_x = x;
  this.original_y = y;
}

Ball.prototype.randomDirection = function() {
};

Ball.prototype.move = function(){
};

Ball.prototype.pointScored = function(){
};

// returns winner paddle or false
Ball.prototype.winner = function(){
};

Ball.prototype.restart = function(){
  this.x = this.original_x;
  this.y = this.original_y;
};

var movement = setInterval(function(){
  var ball = document.getElementById('ball'),
  style = window.getComputedStyle(ball),
  top = style.getPropertyValue('top');
  left = style.getPropertyValue('left');

  ball.style.top = parseInt(top.slice(0, -1))-1+"px";
  ball.style.left = parseInt(left.slice(0, -1))+1+"px";
}, 5);
