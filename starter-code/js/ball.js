function Ball(x,y, paddle1, paddle2) {

}

Ball.prototype.randomDirection = function() {
};

Ball.prototype.move = function(){

};

Ball.prototype.pointScored = function(){
};

// returns winner paddle or false
Ball.prototype.winner = function(){
};

Ball.prototype.restart = function(){
};


$(document).ready(function () {
    var interval = 1000;
    var $ball =$('#ball');
    var random= function(){
      return Math.floor((Math.random()* 4) + 1);
    };
    while (interval>0) {
      for(i=0;i<6;i++){
      $ball.css('left', $ball.offset().left - 10);
      }
      for(i=0;i<6;i++){
      $ball.css('top', $ball.offset().top - 10);
      }
      for(i=0;i<6;i++){
      $ball.css('left', $ball.offset().left + 10);
      }
      for(i=0;i<6;i++){
      $ball.css('top', $ball.offset().top + 10);
      interval--;
      }

    }


});
