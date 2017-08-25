function Ball(x,y, top, left) {
  this.positionX = 271;
  this.positionY = 100;
  this.top = "bottom";
  this.left = "right";
  this.maxX = 1110;
  this.minX = 297;
  this.maxY = 575;
  this.minY = 118;
}

Ball.prototype.move = function(){
if (this.left == "left"){
  if(this.positionX > this.minX){
    this.positionX -= 25;
    $('#ball').css("left", this.positionX);
  }
  else {
    this.left="right";
  }
}
if (this.left == "right"){
  if(this.positionX < this.maxX){
    this.positionX += 25;
    $('#ball').css("left", this.positionX);
  }
  else {
    this.left="left";
  }
}/*
if (this.top == "top") {
  if (this.positionY > this.minY) {
    this.positionY -= 20;
    $("#ball").css("top", this.positionY);
  } else {
    this.top = "bottom";
  }
}
if (this.top == "bottom") {
  if (this.positionY < this.maxY) {
    this.positionY += 20;
    $("#ball").css("top", this.positionY);
  } else {
    this.top = "top";
  }
}*/
};
