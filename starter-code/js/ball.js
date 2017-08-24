function Ball(x,y, paddle1, paddle2) {
  this.control = 0;
  this.positionX = x;
  this.positionY = y;
  this.againstPaddle1 = paddle1;
  this.againstPaddle2 = paddle2;
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
  if(howUp === 55){
    this.control = 1;
  }
  if(howLeft === 1100){
    this.control =  2;
  }
  if(howUp === 805){
    this.control = 3;
  }
  if(howLeft === 50){
    this.control = 0;
  }

  switch (this.control) {
    case 0:
      howUp -= 10;
      howLeft +=10;
      break;
      case 1:
      howUp +=10;
      console.log(howLeft);
      howLeft += 10;
      break;
      case 2:
      howUp +=10;
      console.log(howUp);
      howLeft -=10;
      break;
      case 3:
      howUp -=10;
      howLeft-=10;
      break;
    default:

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
