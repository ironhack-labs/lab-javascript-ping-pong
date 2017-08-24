function Ball(x,y, paddle1, paddle2) {
  this.minTop = 10;
  var alturaTablero = parseInt($("#board").css('height'));
  var alturaPelota = parseInt($("#ball").css('height'));
  this.maximillo = alturaTablero - alturaPelota ;


  this.minLefth = 10;
  var anchoTablero = parseInt($("#board").css('width'));
  var anchoPelota = parseInt($("#ball").css('width'));
  this.maximiliano = anchoTablero - anchoPelota ;
}

// Ball.prototype.randomDirection = function() {
// };
//
// Ball.prototype.move = function(){
// };
//
// Ball.prototype.pointScored = function(){
// };
//
// // returns winner paddle or false
// Ball.prototype.winner = function(){
// };
//
// Ball.prototype.restart = function(){
// };


Ball.prototype.arribaDerecha = function(){
  var b = parseInt($("#ball").css('top'));
  var x = this.minTop;


  var b2 = parseInt($("#ball").css('left'));
  // var x2 = this.minLefth;
  // var maximLefth = this.maximilino;
  var chocara = b>x;

if(!chocara){
  console.log("arriba derecha");
  b -=1;
  $("#ball").css('top', b +'px');
  b2 +=1;
  $("#ball").css('left', b2 +'px');
  Ball.prototype.arribaDerecha();}
  else{
    Ball.prototype.abajoDerecha();}
};



Ball.prototype.arribaIzquierda = function(){
  var b = parseInt($("#ball").css('top'));
  var x = this.minTop;


  var b2 = parseInt($("#ball").css('left'));
  // var x2 = this.minLefth;
  // var maximLefth = this.maximilino;
  var chocara = b<x;

  if(!chocara){
  console.log("arriba derecha");
  b -=8;
  $("#ball").css('top', b +'px');
  b2 -=8;
  $("#ball").css('left', b2 +'px');
  Ball.prototype.arribaIzquierda();}
  else{
    Ball.prototype.abajoIzquierda();}
};

Ball.prototype.abajoDerecha = function(){
  var b = parseInt($("#ball").css('top'));
  var maximTop = this.maximillo;

  var b2 = parseInt($("#ball").css('left'));
  // var x2 = this.minLefth;
  // var maximLefth = this.maximilino;
  var chocara = b<maximTop;

  if (!chocara){
    console.log("arriba derecha");
    b +=8;
    $("#ball").css('top', b +'px');
    b2 -=8;
    $("#ball").css('left', b2 +'px');
    Ball.prototype.abajoDerecha();}

  else{
    Ball.prototype.arribaDerecha();
    }
};

Ball.prototype.abajoIzquierda = function(){
  var b = parseInt($("#ball").css('top'));
  var maximTop = this.maximillo;

  var b2 = parseInt($("#ball").css('left'));
  // var x2 = this.minLefth;
  // var maximLefth = this.maximilino;
  var chocara = b<maximTop;

  if (!chocara){
    console.log("arriba derecha");
    b -=8;
    $("#ball").css('top', b +'px');
    b2 +=8;
    $("#ball").css('left', b2 +'px');
    Ball.prototype.abajoIzquierda();}
  else{
      Ball.prototype.arribaIzquierda  ();
    }
};
