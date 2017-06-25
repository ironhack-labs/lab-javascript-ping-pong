function Board() {}

Board.prototype.start = function() {



};
Board.prototype.moveYup = function(x) {
  x = $("#paddle1").position().top;
  x -= 50;
  $("#paddle1").css({
    top: x
  });

};

Board.prototype.moveYdown = function(x) {
  x = $("#paddle1").position().top;

  x += 50;
  $("#paddle1").css({
    top: x
  });

};

Board.prototype.moveYup2 = function(y) {
  y = $("#paddle2").position().top;
  y -= 4;
  $("#paddle2").css({
    top: y
  });

};

Board.prototype.moveYdown2 = function(y) {
  y = $("#paddle2").position().top;
  y += 4;
  $("#paddle2").css({
    top: y
  });

};

Board.prototype.checkGame = function() {};

Board.prototype.stop = function() {};

Board.prototype.restart = function() {};

Board.prototype.gameOver = function() {};
$(document).on('keydown', function(e) {
  if (e.keyCode == 38) {
    Board.prototype.moveYup();

  }
  if (e.keyCode == 40) {
    Board.prototype.moveYdown();


  }



});
