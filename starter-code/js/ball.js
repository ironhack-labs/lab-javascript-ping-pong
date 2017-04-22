function Ball(x,y, paddle1, paddle2) {
  this.x=x;
  this.y=y;
  this.original_x=x;
  this.original_y=y;
  this.initialDirection="";
}

Ball.prototype.randomDirection = function() {
  var firstDirection = Math.round(Math.random());
  if (firstDirection===0){
    this.initialDirection = "left";
  } else {
    this.initialDirection = "rigth";
  }
  return this.initialDirection;
};

Ball.prototype.move = function(sumX, sumY){
  var nextX = (this.x += sumX);
  var nextY = (this.y += sumY);
  var nextStepX = nextX + "px";
  var nextStepY = nextY + "px";
  $("#ball").css("left", nextStepX);
  $("#ball").css("top", nextStepY);
};

// Ball.prototype.pointScored = function(){
// };
//
// // returns winner paddle or false
// Ball.prototype.winner = function(){
// };

Ball.prototype.restart = function(){
  this.x=this.original_x;
  this.y=this.original_y;
};
