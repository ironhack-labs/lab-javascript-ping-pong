

function Ball(x,y, paddle1, paddle2) {
  this.x = x;
  this.y = y;
}

Ball.prototype.randomDirection = function() {
  this.x = Math.floor(Math.random()*1000);
  this.y = Math.floor(Math.random()*1000);
  var initialPosition = [];
  initialPosition.push(this.x, this.y);
  return initialPosition;
};

Ball.prototype.move = function(array){
    var newArray = array.map(function(number){
    return number + 5;
  });
};

Ball.prototype.pointScored = function(){
};

// returns winner paddle or false
Ball.prototype.winner = function(){
};

Ball.prototype.restart = function(){
};

var startPosition = Ball.prototype.randomDirection();

var letsMove = Ball.prototype.move(startPosition);


console.log(Ball.prototype.randomDirection());
console.log(Ball.prototype.move());
