function Paddle(x,y) {
  this.positionX = x;
  this.positionY = y;

}
Paddle.prototype.restart = function(){
};

Paddle.prototype.hitBall = function(ball_y){
};


Paddle.prototype.renderPaddle = function(){

};

Paddle.prototype.moveUp = function(whichPaddle){
  var howUp = parseInt($(whichPaddle).css("top"));
  if(howUp > 10){
  howUp -=10;
  $(whichPaddle).css("top", howUp + "px");
}

};

Paddle.prototype.moveDown = function(whichPaddle){
  var howDown = parseInt($(whichPaddle).css("top"));
  if(howDown < 560)
  howDown +=10;
  $(whichPaddle).css("top", howDown + "px");
};

function activatePaddle2() {
}
