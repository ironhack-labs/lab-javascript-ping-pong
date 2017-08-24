function Paddle(x,y) {
  this.x = 50;
  this.y = 50;
  this.size = 200;
  this.score = 0;
}
Paddle.prototype.restart = function(){
};

Paddle.prototype.hitBall = function(ball_y){
};

Paddle.prototype.moveUp = function(){
    var a = parseInt($("#paddle1").css('top'));
    if (a<board.height-this.size){
      a+=10;
      $("#paddle1").css('top', a +'px');
    }
};
Paddle.prototype.moveDown = function(){
    var a = parseInt($("#paddle1").css('top'));
    if (a>0){
      a-=10;
      $("#paddle1").css('top', a +'px');
    }
};
