function Board() {}

Board.prototype.start = function() {
  this.moveYup();

};
Board.prototype.moveYup = function(x) {
  x = $("#paddle1").position().top;
  console.log(x);
  x -= 50;
  console.log(x);
  $("#paddle1").css({
    top: x
  });
  console.log($("#paddle1").position().top);
};

Board.prototype.moveYdown = function(x) {
  x = $("#paddle1").position().top;
  console.log(x);
  x += 50;
  console.log(x);
  $("#paddle1").css({
    top: x
  });
  console.log($("#paddle1").position().top);
};

Board.prototype.moveYup2 = function(y) {
  y = $("#paddle2").position().top;
  console.log(y);
  y -= 50;
  console.log(y);
  $("#paddle2").css({
    top: y
  });
  console.log($("#paddle2").position().top);
};

Board.prototype.moveYdown2 = function(y) {
  y = $("#paddle2").position().top;
  console.log(y);
  y += 50;
  console.log(y);
  $("#paddle2").css({
    top: y
  });
  console.log($("#paddle2").position().top);
};

Board.prototype.checkGame = function() {};

Board.prototype.stop = function() {};

Board.prototype.restart = function() {};

Board.prototype.gameOver = function() {};
$(document).on('keydown', function(e) {
  if (e.keyCode == 38) {
    Board.prototype.moveYup();
    Board.prototype.moveYup2();
  }
  if (e.keyCode == 40) {
    Board.prototype.moveYdown();
    Board.prototype.moveYdown2();
  }
});
