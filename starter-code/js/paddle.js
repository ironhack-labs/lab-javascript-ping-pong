function Paddle(y,height) {
  this.posY = 100;
  this.posX = 0; // CONSTANT
  // this.height = height;
}

Paddle.prototype.up = function(){
  return this.posY -= 20;
};
Paddle.prototype.down = function(){
  return this.posY += 20;
};


//
// Paddle.prototype.restart = function(){
//
// };
//
// Paddle.prototype.hitBall = function(ball_y){
// };
