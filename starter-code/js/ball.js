function Ball(x,y, paddle1, paddle2) {
  this.controlX = 1;
  this.controlY = 1;
  this.x = 0;
  this.y = 0;
  this.end = false;
  this.size = 30;
}

Ball.prototype.randomNumber = function() {
  var a = Math.round(Math.random());
  return a;
};

Ball.prototype.randomDirection = function() {
  this.controlX = this.randomNumber();
  this.controlY = this.randomNumber();
};

Ball.prototype.move = function(){

  var $ptopPaddle = parseInt($("#paddle1").css('top'));
  var $ptopPaddle2 = $ptopPaddle + parseInt($("#paddle1").css('height'));
  var $pleftPaddle = parseInt($("#paddle1").css('left'));

  if(this.controlY === 1){
    this.y += 5;
  }else{
    this.y -= 5;
  }
  if(this.controlX==1){
    this.x+=5;
  }else{
    this.x-=5;
  }

  if(this.y <= 0){
    this.controlY = 1;
    this.y = 0;
  }else if(this.y >= (600-this.size)){
    this.controlY = 0;
    this.y = (600-this.size);
  }

  if(this.x<=0){
    this.restart();
    this.end = true;

  }else if(this.y > $ptopPaddle && this.y < $ptopPaddle2 && this.x === ($pleftPaddle + this.size)){
    this.controlX = 1;
    this.x=$pleftPaddle + this.size;
  }else if(this.x >= (800-this.size)){
    this.controlX=0;
    this.x=800-this.size;
  }

  $("#ball").css('top', this.y +'px');
  $("#ball").css('left', this.x +'px');

};

Ball.prototype.pointScored = function(){
};

// returns winner paddle or false
Ball.prototype.winner = function(){
};

Ball.prototype.restart = function(){
  alert("YOU LOST. Do you want to restart?");
};
