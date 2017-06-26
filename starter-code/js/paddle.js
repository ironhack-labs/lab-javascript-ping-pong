function Paddle(x,y) {
}
Paddle.prototype.restart = function(){
};

Paddle.prototype.hitBall = function(ball_y){
};

Paddle.prototype.up = function(){
  var x = $('#paddle-1').position().top;
  if(x > 0){
    $('#paddle-1').css({top: x -= 30});
  } else {
    return;
  }
};

Paddle.prototype.down = function(){
  var x = $('#paddle-1').position().top;
  if(x < 460){
    $('#paddle-1').css({top: x += 30});
  } else {
    return;
  }
};
