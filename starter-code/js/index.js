//declaramos constructor
var paddle = new Paddle();
var keys = {};


$(document).ready(function (){

    //almacena codigo tecla pulsada
    $(document).on('keydown', function(e){
     keys[e.keyCode] = true;
      }).keyup(function(e){
      delete keys[e.keyCode];
    });

    //intervalo que permita el movimiento
    setInterval(function (){
      if (keys[81]) {
        paddle.movUp();
      }
      else if(keys[65]) {
        paddle.movDown();
      }


    },30);




});






// var board = new Board();
//
// $('#start').on('click', function(){
//   board.start();
//   activatePaddle2();
//   var game = setInterval(updateState, intervalTime);
//   renderGame();
// });
//
// function updateState(){
// }
//
// $(document).on('keydown', function(e){
//   Paddle.movDown();
// });

// function activatePaddle2() {
// }
//
// function renderGame(){
// }
//
// function renderScore(){
// }
//
// function renderBall(){
// }
//
// function renderPaddle(){
// }
