function Ball(x,y, paddle1, paddle2) {
  this.x = x;
  this.y = y;
}

Ball.prototype.randomDirection = function() {




};

Ball.prototype.move = function(){

  var a =  Math.floor(Math.random()*1);
  var intervalId = setInterval (function(x,y){

  if (a === 0){return x+20;
  }
  else if (b === 0) {return y+20;
  }
  else {
    return [x-20,y-20];
  }
  }, 1000);

};



Ball.prototype.pointScored = function(){
};

// returns winner paddle or false
Ball.prototype.winner = function(){
};

Ball.prototype.restart = function(){
};
