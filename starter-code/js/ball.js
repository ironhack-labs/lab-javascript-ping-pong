function Ball(x,y, paddle1, paddle2) {
}

Ball.prototype.randomDirection = function() {


};

Ball.prototype.move = function(){
  var ballLeftRight = 0;
  var checkLeftRight =true;
  var moveUpDownBall= true;
  var upDownBall = 0;
  setInterval(function(){
    if(ballLeftRight === 10){
      checkLeftRight=true;
    }
    if(ballLeftRight === 1940){
      checkLeftRight=false;
    }
    if(checkLeftRight===false){
      --ballLeftRight;
    }else{
      ++ballLeftRight;
    }

  $("#ball").css("left",ballLeftRight);
  },1);
  setInterval(function(){
    if(upDownBall === 10){
      moveUpDownBall=true;
    }
    if(upDownBall=== 900){
      moveUpDownBall=false;
    }
    if(moveUpDownBall===false){
      --upDownBall;
    }else{
      ++upDownBall;
    }

  $("#ball").css("bottom",upDownBall);
},20);
};

Ball.prototype.pointScored = function(){
};

// returns winner paddle or false
Ball.prototype.winner = function(){
};

Ball.prototype.restart = function(){
};
