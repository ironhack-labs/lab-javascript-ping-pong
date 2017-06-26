function Ball(x,y, paddle1, paddle2) {

    this.paddel1 = paddle1;
    this.paddle2 = paddle2;
    this.direction = 0;
    // 0 = upRight  || 1 = downRight
    // 2 = downLeft || 3 = upLeft
}

Ball.prototype.randomDirection = function() {
};

Ball.prototype.move = function(){
  var x = $("#ball").position().left;
  var y = $("#ball").position().top;
  var direction = 0;
  var that=this;
  var vel = 10;

  var intervalId = setInterval(function(){
    console.log(x,y);
    switch (that.direction) {
      case 0:
        if (y > 0) {
          console.log(that.direction);
          $("#ball").css({left: x+=vel});
          $("#ball").css({top: y-=vel});
          } else {
        that.direction = 1;
        }
        break;
      case 1:
        if (y < 390 ){
          console.log(that.direction);
          $("#ball").css({left: x+=vel});
          $("#ball").css({top: y+=vel});
          if (x > 790) {
            $("#ball").css({left: x+=vel});
            $("#ball").css({top: y+=vel});
            }
        } else {
          that.direction = 0;
        }
        break;
      case 2:
        if (y < 390){
          console.log(that.direction);
          $("#ball").css({left: x-=vel});
          $("#ball").css({top: y+=vel});
        } else {
        that.direction = 3;
        }
        break;
      case 3:
      if (y > 0){
        console.log(that.direction);
        $("#ball").css({left: x-=vel});
        $("#ball").css({top: y-=vel});
        } else {
        that.direction = 2;
        }
        break;
    }
  }, 100);
};


/*Ball.prototype.move = function(){
  var x = $("#ball").position().left;
  var y = $("#ball").position().top;
  var direction = 0;
  var that=this;

  var intervalId = setInterval(function(){
    console.log(x,y);
    switch (that.direction) {
      case 0:
        if () {
          console.log(that.direction);
          $("#ball").css({left: x+=1});
          $("#ball").css({top: y-=1});
        } else {
          that.direction = 1;
        }
        break;
        }

});*/





Ball.prototype.pointScored = function(){
};

// returns winner paddle or false
Ball.prototype.winner = function(){
};

Ball.prototype.restart = function(){
};
