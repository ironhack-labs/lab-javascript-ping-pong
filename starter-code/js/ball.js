function Ball(x,y, paddle1, paddle2, board) {
  this.top = x;
  this.left = y;
  this.element = document.getElementById('ball');
  this.style = window.getComputedStyle(this.element);
  this.velocity = 5;
  this.direction = "NW";
  this.diameter = 20;
  this.board = board;
}

Ball.prototype.randomDirection = function() {
  this.direction = ["NE","NW","SE","SW"][Math.floor(Math.random() * 4)];
};

Ball.prototype.move = function(){
  var topIncrement;
  var leftIncrement;
  switch (this.direction) {
    case "NE":
      topIncrement = -1;
      leftIncrement = +1;
      break;
    case "SE":
      topIncrement = +1;
      leftIncrement = +1;
      break;
    case "NW":
      topIncrement = -1;
      leftIncrement = -1;
      break;
    case "SW":
      topIncrement = +1;
      leftIncrement = -1;
      break;
    default:

  }
  this.top += (this.velocity * topIncrement);
  this.left += (this.velocity * leftIncrement);
  this.updatePosition();
  this.checkBorders();
  console.log("ball_TOP-LEFT:"+ this.top + "-" +this.left);
  console.log("increment_TOP-LEFT:"+ topIncrement + "-" +leftIncrement);
  console.log("BOARD: " + this.board.height + " " + this.board.width);
};

Ball.prototype.pointScored = function(){

};

// returns winner paddle or false
Ball.prototype.winner = function(){
};

Ball.prototype.restart = function(){
  this.top = 200;
  this.left = 400;
  this.randomDirection();
};

Ball.prototype.updatePosition = function (){
    this.element.style.top = this.top + "px";
    this.element.style.left = this.left + "px";
    this.element.innerHTML = this.direction;
};

Ball.prototype.checkBorders = function(){
  if (this.top <=0) {
    this.changeDirection(this.direction, "top");
  } else if (this.top >= (this.board.height - this.diameter)){
    this.changeDirection(this.direction, "bottom");
  } else if(this.left <= 0) {
    this.changeDirection(this.direction, "left");
  } else if  (this.left>=(this.board.width - this.diameter)) {
    this.changeDirection(this.direction, "right");
  }
};

Ball.prototype.changeDirection = function(direction, borders){

  switch (borders) {
    case "top":
      switch (direction) {
        case "NE":
            this.direction = "SE";
            break;
        case "NW":
            this.direction= "SW";
            break;
      }
      break;
    case "bottom":
      switch (direction) {
        case "SE":
            this.direction= "NE";
            break;
        case "SW":
            this.direction= "NW";
            break;
      }
      break;
    case "left":
      switch (direction) {
        case "SW":
            this.direction= "SE";
            break;
        case "NW":
            this.direction= "NE";
            break;
      }
      break;
    case "right":
      switch (direction) {
        case "SE":
            this.direction= "SW";
            break;
        case "NE":
            this.direction= "NW";
            break;
      }
      break;
    default:
  }

};
