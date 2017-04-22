function Paddle(x, y, name) {
  this.y = y;
  this.original_x = x;
  this.original_y = y;
  this.score = 0;
  this.name = name;
}

var paddle1 = new Paddle();

var yAx = 225;

Paddle.prototype.moveUp = function(y){
  var top = $('#paddle1').position().top;
  if(top <= 0){
    $('#paddle1').css('top',0+'px');
  } else {
    yAx -= 10;
    $('#paddle1').css('top',yAx+'px');
 }
};

Paddle.prototype.moveDown = function(y){
  var bot = $('#paddle1').position().top;
  if(bot <= 0){
    $('#paddle1').css('top',10+'px');
  } else {
    yAx= 460;
    $('#paddle1').css('top',yAx+'px');
  }
};

Paddle.prototype.restart = function(){
  this.x = this.original_x;
  this.y = this.original_y;
};

Paddle.prototype.hitBall = function(ball_y){
  var RANGE = 100;
  return (Math.abs(ball_y - this.y) < RANGE);
};

var movePaddle2 = setInterval(function(){
  var paddle = document.getElementById('paddle2'),
  style = window.getComputedStyle(paddle),
  top = style.getPropertyValue('top');

  paddle.style.top = parseInt(top.slice(0, -1))-1+"px";
}, 5);
