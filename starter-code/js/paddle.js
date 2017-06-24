function Paddle(y,height) {
  this.posY = 0;
  this.posX = 0; // CONSTANT
}

Paddle.prototype.up = function(){
  return this.posY -= 20;
};
Paddle.prototype.down = function(){
  return this.posY += 20;
};
