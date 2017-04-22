function Board(ball,paddle1, paddle2) {
  this.paddle1=paddle1;
  this.paddle2=paddle2;
  this.ball=ball;
}

Board.prototype.start = function(){
//  this.paddle1.position=X;
//  this.paddle2.position=X;
//  this.ball.position=X;
};

Board.prototype.checkGame = function(){
  //Comprueba qel estado
};

Board.prototype.stop = function(){
  // para el juego
};

Board.prototype.restart = function(){
  // borra el actual Board y lanza start//
  //borra la puntucacion
};

Board.prototype.gameOver = function(){
  //Pausa el juego y muestra al ganador, luego muestra un confirm para reiniciar
};

$(document).ready(function() {


});
