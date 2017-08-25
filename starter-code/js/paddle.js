function Paddle(x, y) {
  this.x = x;
  this.y = y;
}
Paddle.prototype.restart = function() {};

Paddle.prototype.hitBall = function(ball_y) {};

Paddle.prototype.moveup = function() {
  console.log("up");
  this.y = parseInt($("#paddle1").css('top'));
  if(this.y>26){
  this.y -= 8;
}
  $("#paddle1").css('top', this.y + 'px');

};

Paddle.prototype.movedown = function() {
  console.log("down");
  this.y = parseInt($("#paddle1").css('top'));
    if(this.y<666){
  this.y += 8;
}
  $("#paddle1").css('top', this.y + 'px');
};
