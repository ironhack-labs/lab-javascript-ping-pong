function Ball(x,y, paddle1, paddle2) {
  this.x = x;
  this.y = y;
  this.paddle1 = paddle1;
  this.paddle2 = paddle2;
}

var ball1 = new Ball();

Ball.prototype.randomDirection = function() {

};

Ball.prototype.move = function(){

  var that = this;

  that.interval  = setInterval(function() {
    //var maxLeft = $('#board').width() - $('#ball').width();
    //var maxTop = $('#board').height() - $('#ball').height();
    var leftPos = Math.floor(Math.random() * ( 1 + 100 - 0));
    var topPos = Math.floor(Math.random() * ( 1 + 100 - 0));

    $('#ball').css({
      left: leftPos+'%',
      top: '50%'
    });

    if ( $('#ball').position() > 10 ) {
      clearInterval(moveBall);
    }
  }, 1000);

};



Ball.prototype.pointScored = function(){
};

// returns winner paddle or false
Ball.prototype.winner = function(){
};

Ball.prototype.restart = function(){
};
