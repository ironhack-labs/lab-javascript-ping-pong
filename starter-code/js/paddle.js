function Paddle(x,y) {
  this.x = x;
  this.y = y;
}
Paddle.prototype.restart = function(){
  $("#paddle1").css("top", "150px");
  $("#paddle2").css("top", "150px");
};

Paddle.prototype.movePaddle = function(){
  $(document).on('keydown', function(e){
    var x = $("#paddle1").position().top;
   if(event.keyCode === 38){
      if(x <= 0){
        return;
      }
      $("#paddle1").css({top: x-=15});
    }else if(event.keyCode === 40){
      if(x >= 285){
        return;
      }
      $("#paddle1").css({top: x+=15});
    }
  });
};

Paddle.prototype.movePaddleSecond = function(){
  $(document).on('keydown', function(e){
    var y = $("#paddle2").position().top;
   if(event.keyCode === 87){
      if(y <= 0){
        return;
      }
      $("#paddle2").css({top: y-=15});
    }else if(event.keyCode === 83){
      if(y >= 285){
        return;
      }
      $("#paddle2").css({top: y+=15});
    }
  });
};




Paddle.prototype.hitBall = function(ball_y){
};
