function Ball() {
  this.direction = 1;
  this.initPosition = this._randomPosition();
}

Ball.prototype._randomPosition = function() {
  var top = Math.floor((Math.random() * 400));  // Heigth of board. TO DO in board.js
  var left = Math.floor((Math.random() * 800)); // Width of board. TO DO in board.js
  return {
    top: top,
    left: left
  };
};

Ball.prototype.move = function(direction) {
  this.direction = direction;
  var ballSpeed = 4;

  var that = this;

  var intervalId = setInterval(function() {

    var verticalPos = $('#ball').position().top;
    var horizPos = $('#ball').position().left;
    var paddle1Vertical = $("#paddle-1").position().top;
    var paddle1Horiz = $("#paddle-1").position().left;
    var containerHeight = $('.container').innerHeight();
    var containerGameHeight = $('.container-game').innerHeight();
    var paddle2Position = $('#paddle-2').position().left;

    switch (that.direction) {
      case 1:

        if (verticalPos > containerHeight && horizPos < paddle2Position) {
          console.log('1111');

          $("#ball").css({
            top: verticalPos -= ballSpeed,
            left: horizPos += ballSpeed
          });
        } else {
          that.direction = 2;
        }
        break;

      case 2:

        if (verticalPos < containerGameHeight && horizPos < paddle2Position) {
          console.log('2222');

          $("#ball").css({
            top: verticalPos += ballSpeed,
            left: horizPos += ballSpeed
          });
        } else {
          that.direction = 3;
        }
        break;

      case 3:

        if (verticalPos > containerHeight && horizPos < paddle2Position) {
          console.log('3333');
          $("#ball").css({
            top: verticalPos -= ballSpeed,
            left: horizPos += ballSpeed
          });
        } else {
          that.direction = 4;
        }
        break;

      case 4:

        if (verticalPos > containerHeight && horizPos > paddle1Horiz) {
          console.log('444444444');
          $("#ball").css({
            top: verticalPos -= ballSpeed,
            left: horizPos -= ballSpeed
          });
        } else {
          that.direction = 5;
        }
        break;

      case 5:

        if (verticalPos < containerGameHeight && horizPos > paddle1Horiz) {
          $("#ball").css({
            top: verticalPos += ballSpeed,
            left: horizPos -= ballSpeed
          });
        } else {
          that.direction = 6;
        }
        break;

      case 6:

        if (verticalPos > containerHeight && horizPos > paddle1Horiz) {
          $("#ball").css({
            top: verticalPos -= ballSpeed,
            left: horizPos -= ballSpeed
          });
        } else {
          that.direction = 1;
        }
        break;
    }
  }, 20);
};

Ball.prototype.pointScored = function() {};

// returns winner paddle or false
Ball.prototype.winner = function() {};

Ball.prototype.restart = function() {};
