function Ball(x,y, paddle1, paddle2) {
  this.control = 0;
  this.positionX = x;
  this.positionY = y;
  this.directionX = "right";
  this.directionY = "up";
  // this.againstPaddle1 = paddle1;
  // this.againstPaddle2 = paddle2;
  this.direction = this.randomDirection();
}

Ball.prototype.randomDirection = function() {
 var directions = ["leftup", "rightup", "rightdown", "leftdown"];
 var picked =  Math.floor(Math.random()*4);
 return directions[picked];

};

Ball.prototype.move = function(){

var howUp = parseInt($(myBall).css("top"));
var howLeft = parseInt($(myBall).css("left"));

if(this.directionY === "down"){
  if(howUp<= 700){

    howUp+= 10;
  }else{
    this.directionY = "up";
  }
}
if(this.directionX === "right"){
  if(howLeft <1000){
    howLeft +=10;
  }
  else if(howLeft >= 1000 && !(howUp >= paddle2.positionY && howUp<=(paddle2.positionY+250)) ){
    howLeft += 10;
    this.directionX ="right";
  }

  else{
    this.directionX ="left";
  }
}
if(this.directionY === "up"){
  if(howUp>=50){
    howUp-= 10;
  }

  else{
    this.directionY = "down";
  }
}
if(this.directionX === "left"){
  if(howLeft>100){
    howLeft -=10;

  }
  else if(howLeft <= 100 && !(howUp >= paddle.positionY && howUp<=(paddle.positionY+250)) ){
    howLeft -= 10;
    this.directionX ="left";
  }

  else{
    this.directionX ="right";
  }
}

$(myBall).css("top", howUp);
$(myBall).css("left", howLeft);


};

Ball.prototype.pointScored = function(){
};

// returns winner paddle or false
Ball.prototype.winner = function(){
};

Ball.prototype.restart = function(){
};
