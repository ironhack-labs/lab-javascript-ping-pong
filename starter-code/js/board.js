function Board() {
}

Board.prototype.start = function(){
  paddle.positionY = 250;
  paddle.positionX = 50;
  $(myPaddle).css("top", paddle.positionY);
  $(myPaddle).css("left", paddle.positionX);

};

Board.prototype.checkGame = function(){

};

Board.prototype.stop = function(){
};

Board.prototype.restart = function(){

};

Board.prototype.gameOver = function(){
};

function renderGame(){
}

function renderScore(){
}

function renderBall(){
  
}

Board.prototype.updateState= function(){
  ball.move();
};
