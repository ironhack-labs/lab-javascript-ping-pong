function Paddle(x,y) {

}
Paddle.prototype.restart = function(){

};

Paddle.prototype.hitBall = function(ball_y){

};

Paddle.prototype.up = function(){
  var x = $('#paddle1').position().top;
  if(x > 0){
    $('#paddle1').css({top: x += 5});
  } else {
    $('#paddle1').css({top: x += 5});
  }

};

Paddle.prototype.down = function(){
  var x = $('#paddle1').position().top;
  if(x < 400){
    $('#paddle1').css({top: x -= 5});
  } else {
    return;
  }
};
