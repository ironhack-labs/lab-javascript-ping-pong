function Board() {
  this.score = 0;
  this.score2 = 0;
}

Board.prototype.start = function(){
  $(document).on('keydown', function(e){
    var x = $("#paddle1").position().top;
    var y = $("#paddle2").position().top;
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



Board.prototype.checkGame = function(){
};

Board.prototype.stop = function(){
};

Board.prototype.restart = function(){
};

Board.prototype.gameOver = function(){
};
