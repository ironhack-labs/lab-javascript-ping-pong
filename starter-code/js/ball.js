function Ball(x,y, paddle1, paddle2) {
  this.NE = {top: -1, left: +1};
  this.NO = {top: -1, left: -1};
  this.SE = {top: +1, left: +1};
  this.SO = {top: +1, left: -1};
  this.top = x;
  this.left = y;
  this.element = document.getElementById('ball');
  this.style = window.getComputedStyle(this.element);
  this.velocity = 5;
  this.direction = this.NE;
}

Ball.prototype.randomDirection = function() {
  "FBRL"[Math.floor(Math.random() * 4)];
};

Ball.prototype.move = function(){
  this.top += (this.velocity * this.direction.top);
  this.left += (this.velocity * this.direction.left);
  this.updatePosition();
  this.checkBorders();
  console.log(this.top, this.left);
};

Ball.prototype.pointScored = function(){

};

// returns winner paddle or false
Ball.prototype.winner = function(){
};

Ball.prototype.restart = function(){
  this.top = 200;
  this.left = 200;
};




Ball.prototype.updatePosition = function (){
    this.element.style.top = this.top + "px";
    this.element.style.left = this.left + "px";
};

Ball.prototype.checkBorders = function(){

  if (this.top <=0 || this.top>=360 || this.left<=0 || this.left>=760) {
    console.log("change");
    this.changeDirection(this.direction);
  } else {
  //collition must be here
  }
};

Ball.prototype.changeDirection = function(direction){
  switch (direction) {
    case this.NE:
        this.direction=  this.SE;
        break;
    case this.NO:
        this.direction= this.SO;
        break;
    case this.SE:
        this.direction= this.SO;
        break;
    case this.SO:
        this.direction= this.NO;
        break;
  }
};
