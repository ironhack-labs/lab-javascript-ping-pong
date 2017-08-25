function Paddle(x,y) {
  this.positionX = 0;
  this.positionY = 0;
  this.size = 150;
  this.score = 0;
}

// Paddle.prototype.restart = function(){
// };
//
// Paddle.prototype.hitBall = function(ball_y){
//  };

Paddle.prototype.movUp = function(){
  //pilla elemnto top de la pala convirtiendolo en entero
  this.positionY = parseInt($('#paddle1').css('top'));
  // pixeles que se mueve
  if (this.positionY > 0) {
    this.positionY -= 10;
  }
  // asignamos el nuevo elemnto al dom
  $('#paddle1').css('top', this.positionY + 'px');
};

Paddle.prototype.movDown = function(){
  this.positionY = parseInt($('#paddle1').css('top'));
  console.log(this.positionY);
  console.log(this.positionY - this.size);
  if (this.positionY < 450) {
    this.positionY += 10;
    }
  $('#paddle1').css('top', this.positionY + 'px');
};
