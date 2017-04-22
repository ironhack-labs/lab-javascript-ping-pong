function Paddle(x,y) {

}
Paddle.prototype.restart = function(){
};

Paddle.prototype.hitBall = function(ball_y){
};

$(document).ready(function() {
  var $div = $('.paddle');//#paddle1
  $(document).keydown(function(e) {
      switch (e.which) {
      case 38:
          $div.css('top', $div.offset().top - 10);
          break;
      case 40:
          $div.css('top', $div.offset().top + 10);
          break;
      }
  });
});
